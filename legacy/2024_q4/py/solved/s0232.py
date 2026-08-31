from collections import deque


class MyStack:
    def __init__(self):
        self.stack: deque[int] = deque()

    def push(self, x: int) -> None:
        self.stack.append(x)

    def pop(self) -> int:
        if self.empty():
            raise IndexError("stack pop : empty stack")
        return self.stack.pop()

    def empty(self) -> bool:
        return len(self.stack) == 0


class MyQueue:

    def __init__(self):
        self.stack = MyStack()

    def push(self, x: int) -> None:
        self.stack.push(x)

    def pop(self) -> int:
        if self.empty():
            raise IndexError("queue peek : empty queue")

        temp_list: list[int] = list()
        while not self.empty():
            temp_list.append(self.stack.pop())

        for i in range(len(temp_list)-2, -1, -1):
            self.stack.push(temp_list[i])

        last_one = temp_list[len(temp_list)-1]
        return last_one

    def peek(self) -> int:
        if self.empty():
            raise IndexError("queue peek : empty queue")

        temp_list: list[int] = list()

        while not self.empty():
            temp_list.append(self.stack.pop())

        for i in range(len(temp_list)-1, -1, -1):
            self.stack.push(temp_list[i])

        last_one = temp_list[len(temp_list)-1]
        return last_one

    def empty(self) -> bool:
        return self.stack.empty()


my_queue = MyQueue()
my_queue.push(1)
my_queue.pop()
my_queue.push(2)
my_queue.push(3)
my_queue.push(4)
my_queue.pop()
my_queue.push(5)
my_queue.pop()
my_queue.peek()
