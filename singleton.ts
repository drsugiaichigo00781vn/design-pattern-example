class ChocolateFactory {
  private static uniqInstance: ChocolateFactory
  private id
  private constructor() {
    this.id = 1
  }

  public static getInstance() {
    if (!this.uniqInstance) {
      this.uniqInstance = new ChocolateFactory()
    }

    return this.uniqInstance
  }

  public getId() {
    console.log(this.id);
  }
}

const factory = ChocolateFactory.getInstance()
factory.getId()
const factory02 = ChocolateFactory.getInstance()
factory02.getId()
