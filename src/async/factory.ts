/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { SingaAsyncOptions } from './types';
import { SingaAsync } from './module';

export function singaAsync<T = any>(context: SingaAsyncOptions<T> = {}) : SingaAsync<T> {
    return new SingaAsync(context);
}
