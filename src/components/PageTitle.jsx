// import React from "react";
// import { Helmet } from "react-helmet";

// const PageTitle = ({ title }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//     </Helmet>
//   );
// };

// export default PageTitle;

import { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} | Rony Portfolio` : "Rony Portfolio";
  }, [title]);

  return null; // no JSX needed
};

export default PageTitle;
