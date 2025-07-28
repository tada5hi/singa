/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { SingaOptions } from './types';
import { Singa } from './module';

export function singa<T = any>(options: SingaOptions<T> = {}) : Singa<T> {
    return new Singa(options);
}
