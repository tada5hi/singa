/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { SingaBaseOptions } from '../types';

export type FactoryAsync<T = any> = () => T | Promise<T>;

export type SingaAsyncOptions<T = any> = SingaBaseOptions<FactoryAsync<T>>;
