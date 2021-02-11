const Script = {
  install: function(Vue) {
    Vue.script = function({ domain, params }) {
      const domainUrl = `${domain}/?v1`;
      if (!document.querySelector('script[src="' + domainUrl + '"]')) {
        const el = document.createElement("script");
        const defaultParams =
          params &&
          Object.entries(params)
            .map(([key, value]) => {
              if (key === "maxDpr") return `&max-dpr=${value}`;
              else return `&${key}=${value}`;
            })
            .join("");

        el.src = params ? domainUrl + defaultParams : domainUrl;

        const link = document.createElement("link");
        link.setAttribute("rel", "preconnect");
        link.setAttribute("href", domain);

        document.head.appendChild(link);
        document.head.appendChild(el);
      }
    };
  }
};
export default Script;
