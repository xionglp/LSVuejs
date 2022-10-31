interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

// 接口可以多继承
interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {
    
  },
  flying() {
    
  },
}