import { nodeResolve } from '@rollup/plugin-node-resolve';
import { rollup as unwasm } from "unwasm/plugin";

export default {
    input: 'source.js',
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        nodeResolve(),
        unwasm({ esmImport: true })
    ]
}