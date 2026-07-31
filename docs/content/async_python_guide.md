# Tài Liệu Hướng Dẫn Async Python Hiện Đại (Up-to-Date Guide)
> **Phân chia theo Module**:
> * **PHẦN A (Module 0 - Python AsyncIO Foundations)**: Chapter 1 & Chapter 2 (Nền tảng coroutine, `async/await`, Event Loop, `create_task`, GC Task Safety, tích hợp các cập nhật Python 3.11–3.14+ liên quan).
> * **PHẦN B (Module 12 Tùy chọn - Advanced Async Python & System Concurrency)**: Chapter 3, Chapter 4, Chapter 5 & các chủ đề nâng cao ở Chapter 6 (Low-level Futures, Synchronization Primitives, TaskGroup, Timeout, ExceptionGroup, Queue shutdown).
> **Phiên bản áp dụng**: Python 3.11, Python 3.12, Python 3.13 & Python 3.14+.

---

# 🔷 PHẦN A: NỀN TẢNG ASYNC (Dành Cho Module 0)

## 📌 Chapter 1: Tổng Quan Lập Trình Bất Đồng Bộ (Introduction)

### 1. Lập trình Bất đồng bộ (Asynchronous Programming) là gì?
Lập trình bất đồng bộ (non-blocking code) cho phép chương trình tiếp tục thực thi các tác vụ khác trong lúc chờ một tác vụ tốn thời gian (như I/O mạng, truy vấn CSDL, đọc/ghi file, gọi LLM API) hoàn thành.

### 2. Thread vs Process & Concurrency vs Parallelism
* **Process (Tiến trình)**: Có vùng nhớ riêng biệt.
* **Thread (Luồng)**: Các luồng chạy bên trong cùng một tiến trình và chia sẻ chung vùng nhớ.
* **Concurrency (Đồng thời)**: Xử lý nhiều việc bằng cách luôn phiên luân chuyển nhanh giữa các tác vụ (time-slicing) trên 1 CPU core.
* **Parallelism (Song song)**: Thực thi nhiều tác vụ cùng một thời điểm trên nhiều CPU core thực tế.

### 3. Cập nhật về GIL (Global Interpreter Lock) trong Python 3.13+ (PEP 703)
> [!IMPORTANT]
> **Cập nhật kiến thức mới nhất**:
> * **Trước đây**: GIL là khóa đơn luồng của CPython làm cho chỉ có 1 thread thực thi Python bytecode tại một thời điểm, hạn chế khả năng chạy song song thực sự của multithreading.
> * **Từ Python 3.13+ (PEP 703)**: Python đã bổ sung bản build **Free-threaded Python (`python3.13t` / `--disable-gil`)**. Tính năng này cho phép loại bỏ GIL, giúp multithreading chạy song song thực sự trên nhiều core CPU.

### 4. Event Loop & Coroutine
* **Event Loop**: Trái tim của `asyncio`, quản lý việc lập lịch, phân phối thực thi các tác vụ bất đồng bộ, xử lý I/O và sự kiện.
* **Coroutine**: Hàm được khai báo với `async def`. Khi gọi hàm này, nó trả về một *coroutine object* (chưa chạy ngay cho đến khi được `await` hoặc đưa vào Event Loop).

---

## 📌 Chapter 2: Bắt Đầu Với asyncio (Getting Started)

### 1. Khởi chạy Coroutine chuẩn & `asyncio.Runner()` (Python 3.11+)
Để chạy một coroutine từ cấp cao nhất (top-level):
```python
import asyncio

async def main():
    print("Bắt đầu sleep 1 giây...")
    await asyncio.sleep(1)
    print("Hoàn thành!")

# Khởi chạy Event Loop chuẩn
asyncio.run(main())
```

Trường hợp cần quản lý ngữ cảnh nâng cao, sử dụng `asyncio.Runner()` (từ Python 3.11+):
```python
import asyncio

async def main():
    await asyncio.sleep(1)

with asyncio.Runner() as runner:
    runner.run(main())
```

### 2. Tạo Task & Cảnh báo quan trọng về Garbage Collection (Python 3.11+)
> [!WARNING]
> **Lưu ý giữ tham chiếu Task (Python 3.11+)**:
> Event Loop chỉ giữ *weak reference* đến các task. Nếu bạn tạo task bằng `asyncio.create_task()` mà **không lưu biến tham chiếu**, Task đó có thể bị bộ thu gom rác (Garbage Collector) dọn dẹp mid-execution trước khi chạy xong.

```python
import asyncio

async def worker(n):
    await asyncio.sleep(n)
    return n * 2

async def main():
    # ✅ ĐÚNG: Lưu tham chiếu biến task1, task2
    task1 = asyncio.create_task(worker(1))
    task2 = asyncio.create_task(worker(2))
    
    res1 = await task1
    res2 = await task2
    print(res1, res2)

asyncio.run(main())
```

### 3. Lấy Event Loop hiện tại: `get_running_loop()`
> [!CAUTION]
> Không sử dụng `asyncio.get_event_loop()` bên trong coroutine vì API này đã bị **deprecated** từ Python 3.10+ và gây ra lỗi trong các bản Python mới hơn. Hãy luôn dùng `asyncio.get_running_loop()`.

```python
async def main():
    # ✅ ĐÚNG: Lấy running loop bên trong coroutine
    loop = asyncio.get_running_loop()
    print(f"Loop đang chạy: {loop}")
```

### 4. Tối ưu tốc độ thực thi với `eager_task_factory` (Python 3.12+)
> [!TIP]
> **Tăng tốc 2x - 5x cho Coroutine không chờ I/O**:
> Từ Python 3.12, bạn có thể thiết lập `loop.set_task_factory(asyncio.eager_task_factory)`. Nếu coroutine hoàn thành ngay mà không ngắt I/O, nó sẽ được thực thi ngay lập tức mà không cần lập lịch qua Event Loop. Đồng thời, `asyncio.current_task()` được viết lại bằng C giúp tăng tốc tra cứu 4x-6x.

```python
import asyncio

async def fast_coro():
    return "Xử lý tức thì"

async def main():
    loop = asyncio.get_running_loop()
    loop.set_task_factory(asyncio.eager_task_factory)
    
    task = asyncio.create_task(fast_coro())
    print(task.result()) # Có kết quả ngay lập tức

asyncio.run(main())
```

---

# 🔶 PHẦN B: KỸ THUẬT ASYNC NÂNG CAO (Dành Cho Module 12 Tùy Chọn)

## 📌 Chapter 3: Low-Level Futures & Task Management

### 1. Bản chất của `asyncio.Future`
* `Future` đại diện cho một kết quả thực thi trong tương lai.
* Cấu trúc phân cấp: `Task` kế thừa từ `Future`, `Future` kế thừa từ `Awaitable`.
* `Future` kết nối giữa code callback cũ và code `async/await` hiện đại qua các phương thức `done()`, `set_result(val)`, `set_exception(err)`.

---

## 📌 Chapter 4: Đồng Bộ Hóa & Điều Phối Task (Synchronization & Coordination)

Khi nhiều coroutine cùng truy cập một tài nguyên dùng chung, **Race Condition** có thể xảy ra. `asyncio` cung cấp các primitive đồng bộ hóa sau:

### 1. `asyncio.Lock` (Khóa độc quyền)
Đảm bảo tại một thời điểm chỉ có duy nhất 1 coroutine được truy cập đoạn code bảo vệ.

```python
import asyncio

shared_counter = 0
lock = asyncio.Lock()

async def increment():
    global shared_counter
    async with lock:
        tmp = shared_counter
        await asyncio.sleep(0.01)
        shared_counter = tmp + 1

async def main():
    async with asyncio.TaskGroup() as tg:
        for _ in range(100):
            tg.create_task(increment())
    print(f"Counter cuối cùng: {shared_counter}") # Đúng 100

asyncio.run(main())
```

### 2. `asyncio.Semaphore` (Giới hạn truy cập đồng thời)
Giới hạn số lượng tác vụ song song (ví dụ: giới hạn tối đa 2 kết nối CSDL hoặc 5 LLM API call cùng lúc).

```python
import asyncio

sem = asyncio.Semaphore(2)

async def access_resource(id):
    async with sem:
        print(f"Task {id} lấy được quyền truy cập")
        await asyncio.sleep(1)
        print(f"Task {id} giải phóng tài nguyên")

async def main():
    async with asyncio.TaskGroup() as tg:
        for i in range(4):
            tg.create_task(access_resource(i))

asyncio.run(main())
```

### 3. `asyncio.Barrier` (Đồng bộ rào chắn - Python 3.11+)
Yêu cầu đủ số lượng tác vụ (parties) tập hợp tại barrier rồi mới giải phóng cho tất cả cùng chạy tiếp.

```python
import asyncio

async def worker(barrier, id):
    print(f"Worker {id} đang chuẩn bị...")
    await asyncio.sleep(id)
    await barrier.wait() # Chờ đủ 3 workers
    print(f"Worker {id} vượt qua barrier!")

async def main():
    b = asyncio.Barrier(3)
    async with asyncio.TaskGroup() as tg:
        for i in range(1, 4):
            tg.create_task(worker(b, i))

asyncio.run(main())
```

### 4. `asyncio.Event` (Phát tín hiệu)
Một coroutine có thể chờ tín hiệu (`await event.wait()`), và coroutine khác có thể phát tín hiệu đó (`event.set()`).

---

## 📌 Chapter 5: Kỹ Thuật Async Nâng Cao (Advanced Techniques)

### 1. Structured Concurrency với `asyncio.TaskGroup` (Python 3.11+)
`TaskGroup` là cú pháp tiêu chuẩn hiện đại để quản lý nhóm tác vụ chạy song song an toàn, thay thế cho `asyncio.gather()` hoặc tạo task lẻ thủ công.

```python
import asyncio

async def fetch_data(id, delay):
    await asyncio.sleep(delay)
    return f"Data {id}"

async def main():
    async with asyncio.TaskGroup() as tg:
        t1 = tg.create_task(fetch_data(1, 1))
        t2 = tg.create_task(fetch_data(2, 2))
    
    print(t1.result(), t2.result())

asyncio.run(main())
```

### 2. Quản lý Timeout hiện đại với `asyncio.timeout()` (Python 3.11+)
Thay vì dùng `asyncio.wait_for()`, Python 3.11+ cung cấp Context Manager `asyncio.timeout()` sạch hơn:

```python
import asyncio

async def long_running_job():
    await asyncio.sleep(5)

async def main():
    try:
        async with asyncio.timeout(1.5):
            await long_running_job()
    except TimeoutError:
        print("Tác vụ quá thời gian cho phép!")

asyncio.run(main())
```

### 3. Xử lý Lỗi & Lan truyền Exception (`ExceptionGroup` & `except*`)
Với `asyncio.TaskGroup` (Python 3.11+), nếu một task bị lỗi, các task còn lại trong nhóm sẽ tự động bị cancel và tất cả exception được gom lại thành `ExceptionGroup`. Xử lý bằng cú pháp `except*`:

```python
import asyncio

async def fail_task():
    await asyncio.sleep(0.1)
    raise ValueError("Lỗi dữ liệu!")

async def main():
    try:
        async with asyncio.TaskGroup() as tg:
            tg.create_task(fail_task())
    except* ValueError as eg:
        print(f"Bắt được lỗi trong TaskGroup: {eg.exceptions}")

asyncio.run(main())
```

### 4. Task Cancellation & Message (Python 3.11+)
`asyncio.CancelledError` kế thừa từ `BaseException`. Bạn có thể truyền lý do hủy:

```python
import asyncio

async def worker():
    try:
        await asyncio.sleep(10)
    except asyncio.CancelledError as e:
        print(f"Task bị hủy với lý do: {e}")

async def main():
    t = asyncio.create_task(worker())
    await asyncio.sleep(0.1)
    t.cancel("Cần ngưng để bảo trì")
    await t

asyncio.run(main())
```

### 5. Hàng đợi `asyncio.Queue` (Producer - Consumer)
Mô hình hàng đợi chuẩn để truyền dữ liệu an toàn giữa các task bất đồng bộ:

```python
import asyncio

async def producer(queue: asyncio.Queue):
    for i in range(5):
        await queue.put(i)
        await asyncio.sleep(0.1)
    print("Producer hoàn thành sản xuất!")

async def consumer(queue: asyncio.Queue):
    while True:
        item = await queue.get()
        print(f"Consumer đã xử lý: {item}")
        queue.task_done()

async def main():
    queue = asyncio.Queue()
    consumer_task = asyncio.create_task(consumer(queue))
    
    await producer(queue)
    await queue.join()
    consumer_task.cancel()

asyncio.run(main())
```

---

## 📌 Chapter 6: Cập Nhật Tính Năng Chuyên Sâu (Python 3.11 – 3.14)

| Phiên bản Python | Tính năng Async Nổi bật | Ứng dụng & Lợi ích |
| :--- | :--- | :--- |
| **Python 3.11** | `asyncio.TaskGroup` | Quản lý vòng đời nhóm task an toàn (Structured Concurrency). |
| **Python 3.11** | `asyncio.timeout()` | Quản lý thời gian chờ sạch hơn `wait_for()`. |
| **Python 3.11** | `asyncio.Runner` | Context Manager quản lý việc chạy coroutine linh hoạt. |
| **Python 3.12** | `eager_task_factory` | Chạy ngay task nếu không cần chờ I/O, giúp **tăng tốc 2x - 5x**. |
| **Python 3.12** | `asyncio.current_task()` | Viết bằng C giúp tăng tốc độ tra cứu task hiện tại lên **4x - 6x**. |
| **Python 3.13** | `asyncio.Queue.shutdown()` | Thêm API đóng hàng đợi an toàn, ngắt các call `put/get` đang chờ. |
| **Python 3.13** | Free-threaded (`python3.13t`) | Hỗ trợ gỡ bỏ GIL (No-GIL build), multithreading chạy song song thực sự. |
| **Python 3.14** | `multiprocessing` default POSIX | Thay đổi mặc định start method trên POSIX/Linux sang `spawn`/`forkserver` (thay cho `fork` bị deprecated). |

---

## 💡 Tổng Kết Quy Tắc Viết Code Async Standard (Best Practices)
1. **Dùng `asyncio.run()`** làm entrypoint chính cho chương trình.
2. **Dùng `asyncio.TaskGroup()`** thay vì `asyncio.gather()` cho code async nâng cao để đảm bảo gom cụm task và xử lý lỗi an toàn.
3. **Dùng `asyncio.get_running_loop()`** thay vì `asyncio.get_event_loop()`.
4. **Luôn giữ biến tham chiếu (reference)** khi dùng `asyncio.create_task()`.
5. **Dùng `async with asyncio.timeout()`** để giới hạn thời gian chờ.
6. **Khai báo type hints chuẩn**: Ví dụ `tuple[int, str]` (dùng ngoặc vuông, không dùng ngoặc tròn).
