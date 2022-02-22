/** import {변수, 함수 ,...} from 모듈파일경로 */

import {title as printerTitle , print} from './printer.js'; // as를 사용하여 변수 변경
import {title, data as members } from './members.js';



print(title);
print(members);