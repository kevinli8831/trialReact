import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const navList = ["a昨杳尸", "b", "c"];

    return (
      <>
        <div className="font-bold text-7xl">
          <section>
            <div className="flex ">
              {navList.map((name, index) => (
                <>
                  <div key={`nav${index}`}>
                    <div>
                      {index + 1}.{name}
                    </div>
                  </div>
                </>
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default NavBar;
