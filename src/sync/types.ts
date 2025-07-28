/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { SingaBaseOptions } from '../types';

export type Factory<T = any> = () => T;
export type SingaOptions<T> = SingaBaseOptions<Factory<T>>;
