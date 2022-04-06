class ChocolaFactory {
  private static uniqInstance: ChocolaFactory
  private id
  private constructor() {
    this.id = 1
  }

  public static getInstance() {
    if (!this.uniqInstance) {
      this.uniqInstance = new ChocolaFactory()
    }

    return this.uniqInstance
  }

  public getId() {
    console.log(this.id);
  }
}

const factory = ChocolaFactory.getInstance()
factory.getId()
const factory02 = ChocolaFactory.getInstance()
factory02.getId()
