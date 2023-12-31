import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import dts from 'rollup-plugin-dts';

import packageJson from './package.json' assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
				interop: 'compat',
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
				interop: 'compat',
			},
		],
		plugins: [
			commonjs(),
			image(),
			peerDepsExternal(),
			postcss(),
			resolve(),
			terser(),
			url(),
			typescript({
				tsconfig: './tsconfig.json',
				esModuleInterop: true,
				exclude: [
					'**/__tests__',
					'**/*.test.ts',
					'**/*.test.tsx',
					'**/*.spec.ts',
					'**/*.spec.tsx',
					'**/*.stories.ts',
					'**/*.stories.tsx',
				],
			}),
		],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],

		external: [/\.css$/],
	},
];
