import { render } from "@testing-library/react";
import { Detail } from "@raycast/api";

describe("sample test", () => {
  it("can run a simple test", () => {
    expect(true).toBe(true);
  });

  it("can render a div", () => {
    const { debug } = render(<div>Hello, world!</div>);
    debug();
    expect(true).toBe(true);
  });

  // If uncommented, the following test fails with the error:
  //     Cannot find module '@raycast/api' from 'src/sample.test.tsx'
  //
  //     1 | import { render } from "@testing-library/react";
  //   > 2 | import { Detail } from "@raycast/api";
  //       | ^
  //     3 |
  //     4 | describe("sample test", () => {
  //     5 |   it("can run a simple test", () => {
  //
  //     at Resolver._throwModNotFoundError (node_modules/jest-resolve/build/resolver.js:491:11)
  //     at Object.<anonymous> (src/sample.test.tsx:2:1)
  //
  // it("renders a Detail view", () => {
  //   const { debug } = render(<Detail markdown="**Hello** *world*!" />);
  //   debug();
  //   expect(true).toBe(true);
  // });
});
