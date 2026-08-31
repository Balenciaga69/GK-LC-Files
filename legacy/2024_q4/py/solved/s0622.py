class MyCircularQueue:

    def __init__(self, k: int):
        self.queue: list[int | None] = [None]*k
        self.curr_size = 0
        self.front = 0
        self.rear = 0
        self.len = k

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        self.queue[self.rear] = value
        self.rear = (self.rear + 1) % self.len
        self.curr_size += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        self.queue[self.front] = None
        self.front = (self.front + 1) % self.len
        self.curr_size -= 1
        return True

    def Front(self) -> int:
        target = self.queue[self.front]
        if self.isEmpty() or target is None:
            return -1
        return target

    def Rear(self) -> int:
        target = self.queue[(self.rear-1+self.len) % self.len]
        if self.isEmpty() or target is None:
            return -1
        return target

    def isEmpty(self) -> bool:
        return self.curr_size == 0

    def isFull(self) -> bool:
        return self.curr_size == self.len


mmm = MyCircularQueue(3)
mmm.enQueue(1)
mmm.enQueue(2)
mmm.enQueue(3)
mmm.enQueue(4)
mmm.deQueue()
mmm.deQueue()
mmm.deQueue()
