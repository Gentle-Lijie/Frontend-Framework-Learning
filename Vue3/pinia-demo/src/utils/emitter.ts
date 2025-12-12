import mitt from "mitt";

const emitter = mitt();

emitter.on("test-event", (message) => {
  console.log("Received test-event with message:", message);
});

export default emitter;
