namespace Csharp.Solutions.S1115
{
    using System.Threading;

    public class FooBar
    {
        private AutoResetEvent autoEvtFoo = new (false);
        private AutoResetEvent autoEvtBar = new (false);

        private int n;

        public FooBar(int n)
        {
            this.n = n;
        }

        public void Foo(Action printFoo)
        {
            for (int i = 0; i < this.n; i++)
            {
                printFoo();
                this.autoEvtFoo.Set();
                this.autoEvtBar.WaitOne();
            }
        }

        public void Bar(Action printBar)
        {
            for (int i = 0; i < this.n; i++)
            {
                this.autoEvtFoo.WaitOne();
                printBar();
                this.autoEvtBar.Set();
            }
        }
    }
}