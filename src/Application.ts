import { Controller } from "./Controller";

export namespace Application {
	const domObserver: MutationObserver = new MutationObserver(mutation => {
		console.log("mutation occured: ", mutation);
		// TODO: attach new controllers if component detected
	});

    /**
     * Initial application setup
     */
	function start(): void {
		const target = document.body;
		const options: MutationObserverInit = { attributes: true, subtree: true, childList: true };
		domObserver.observe(target, options);
	}

    const controllerList: Map<string, Controller> = new Map();

    /**
     * Connects the controller to all elements matching the identifier
     * @param identifier identifier of the component
     * @param controller controller for the component
     */
	function mount(identifier: string, controller: Controller): void {
		controllerList.set(identifier, controller);
	}
}
