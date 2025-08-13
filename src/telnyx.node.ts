import {createTelnyx} from './telnyx.js';

const Telnyx = createTelnyx();

// Export for both CommonJS and ESM compatibility
export {Telnyx};
export default Telnyx;

// Ensure proper CJS/ESM interop by setting module.exports directly
declare const module: {exports?: Record<string, unknown>};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Telnyx as unknown as Record<string, unknown>;
  (module.exports as Record<string, unknown>).Telnyx = Telnyx;
  (module.exports as Record<string, unknown>).default = Telnyx;
}
