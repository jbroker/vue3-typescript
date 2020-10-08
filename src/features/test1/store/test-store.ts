import { Store } from '@/store';

interface Test extends Object {
  name: string,
  clicks: number
}

class TestStore extends Store<Test> {
  protected data(): Test {
    return {
      name: 'Joe',
      clicks: 0
    }
  }

  addClick() {
    this.state.clicks++;
  }
}

export const testStore: TestStore = new TestStore;

