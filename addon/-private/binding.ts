export default class Binding {
  public readonly path: ReadonlyArray<string>;

  constructor(path: string) {
    this.path = path.split('.');
  }
}
