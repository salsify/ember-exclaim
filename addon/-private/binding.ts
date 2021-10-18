export default class Binding {
  public path: Array<string>;

  public constructor(path: string) {
    this.path = path.split('.');
  }
}
