/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { SingaCreateContext } from './types';
import {Singa} from "./module";

export function singa<T = any>(context: SingaCreateContext<T> = {}) : Singa<T> {
    return new Singa(context);
}
