import Script from "../../node_modules/next/script";

export default function Home() {
  return (
    <div>
      <Script src="https://assets.calendly.com/assets/external/widget.js"></Script>

      <div
        id="calendly-inline-widget"
        style={{ minWidth: 320, height: 580 }}
        data-auto-load="false"
      ></div>
      <div
        style={{
          marginTop: "100px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              // @ts-ignore
              typeof window.Calendly !== "undefined"
            ) {
              // @ts-ignore
              window.Calendly.initInlineWidget({
                url: "https://calendly.com/avineak-zdm/30min",
                parentElement: document.getElementById(
                  "calendly-inline-widget"
                ),
              });
            }
          }}
        >
          Load Meeting With Avi
        </button>
      </div>
    </div>
  );
}
