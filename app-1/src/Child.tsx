import Postmate from "postmate";

// const newTab = {
//   // compact: false,
//   // icon: "/application-icon.png",
//   // index: "1a4432ddd19b1",
//   // index: "fdd365f9ec7f",
//   // label: "Outro App Local",
//   // launchMode: {
//   //   code: "INSIDE_PORTAL",
//   //   __typename: "LaunchMode",
//   // },
//   // params: "",
//   // src: "http://localhost:5174/",
//   // src: "https://kevintenorio.github.io/fvdam/",
//   slug: "sbwb-basicdata-irp",
//   src: "https://dev.subweb.com.br/basicdata/irp/",
// };

const newTab = {
  slug: "sbwb-basicdata-irp",
  src: "https://dev.subweb.com.br/basicdata/irp/",
};

const Child = () => {
  const handshake = new Postmate.Model({
    // Expose your model to the Parent. Property values may be functions, promises, or regular values
    hello: "Handshake complete!",
  });

  const sendAction = (url?: string) => {
    handshake.then((parent) => {
      const newUrl = newTab.src.substring(0, newTab.src.length - 1) + url;
      parent.emit("open-tab", {
        ...newTab,
        src: newUrl,
      });
    });
  };

  return (
    <div>
      <h4>APP 1 - CHILD</h4>
      <button onClick={() => sendAction("/")}>Abrir App</button>
      <button onClick={() => sendAction("/contact")}>
        Abrir App em /contact
      </button>
      <button onClick={() => sendAction("/about")}>Abrir App em /about</button>
    </div>
  );
};

export default Child;
