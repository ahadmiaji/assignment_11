import React from "react";

function Project() {
  let hasProject = true;
  return (
    <div className="project">
      <h2>This is Project Page</h2>
      {hasProject ? (
        <img
          src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
          alt="projectImg"
        />
      ) : (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          quaerat dolores velit consequuntur, nostrum suscipit, eligendi aperiam
          dignissimos voluptas dicta fuga vel enim omnis reiciendis quibusdam
          earum dolor, soluta laudantium?
        </p>
      )}
    </div>
  );
}

export default Project;
