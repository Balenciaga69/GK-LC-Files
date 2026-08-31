from collections import deque
from typing import Optional

# Queue: append , popLeft
# Stack: append , pop


class MyQueue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, x):
        self.queue.append(x)

    def dequeue(self):
        if not self.empty():
            return self.queue.popleft()
        else:
            raise IndexError("Dequeue from empty queue")

    def empty(self):
        return len(self.queue) == 0


class MyStack:
    def __init__(self):
        self.my_q = MyQueue()

    def push(self, x: int) -> None:
        self.my_q.enqueue(x)

    def pop(self) -> int:
        if self.empty():
            raise IndexError("Pop from empty stack")

        dequeue_val: Optional[int] = None
        temp_q = MyQueue()
        # 全部取出
        while not self.empty():
            dequeue_val = self.my_q.dequeue()
            if not self.empty():
                temp_q.enqueue(dequeue_val)
        # 替換
        self.my_q = temp_q
        # 型別錯誤
        if not isinstance(dequeue_val, int):
            raise TypeError("dequeue_val is not int")
        return dequeue_val

    def top(self) -> int:
        if self.empty():
            raise IndexError("Top from empty stack")

        dequeue_val: Optional[int] = None
        temp_q = MyQueue()
        # 全部取出
        while not self.empty():
            dequeue_val = self.my_q.dequeue()
            temp_q.enqueue(dequeue_val)
        # 替換
        self.my_q = temp_q
        # 型別錯誤
        if not isinstance(dequeue_val, int):
            raise TypeError("dequeue_val is not int")
        return dequeue_val

    def empty(self) -> bool:
        return self.my_q.empty()

my_stack = MyStack()
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.top()
my_stack.pop()
my_stack.empty()
