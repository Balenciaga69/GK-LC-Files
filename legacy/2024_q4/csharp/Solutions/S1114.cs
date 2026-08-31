namespace Csharp.Solutions
{
    using System.Threading;

    // var f = new Foo();
    // new Thread(() => f.Second(() => Console.WriteLine("2"))).Start();
    // new Thread(() => f.First(() => Console.WriteLine("1"))).Start();
    // new Thread(() => f.Third(() => Console.WriteLine("3"))).Start();
    public class Foo
    {
        private AutoResetEvent autoEvt1 = new (false);
        private AutoResetEvent autoEvt2 = new (false);

        public Foo()
        {
        }

        public void First(Action printFirst)
        {
            printFirst();
            this.autoEvt1.Set();
        }

        public void Second(Action printSecond)
        {
            this.autoEvt1.WaitOne();
            printSecond();
            this.autoEvt2.Set();
        }

        public void Third(Action printThird)
        {
            this.autoEvt2.WaitOne();
            printThird();
        }
    }
}