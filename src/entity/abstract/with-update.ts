export abstract class WithUpdate {
  withUpdate({ name, value }: { name: string; value: string }): this {
    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
    clone[name] = value;
    return clone;
  }
}
