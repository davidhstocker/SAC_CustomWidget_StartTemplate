(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
		</style>
	`;

	class HelloWorldAps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
		}

	}

customElements.define("com-sap-sample-template'-aps", HelloWorldAps);
})();