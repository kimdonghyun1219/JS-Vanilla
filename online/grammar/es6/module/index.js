/** import {변수, 함수 ,...} from 모듈파일경로 */

/** named import */
import {title as printerTitle , print} from './printer.js'; // as를 사용하여 변수 변경
import {title as atitle, data as members } from './members.js';

/** 전부 불러오기 */
// import * as printerJS from './printer.js';  -> default를 사용할 경우 printerJS.default 로 접근

print(title);
print(members);

/** default import : as를 붙여 사용 */
// 1. import {default as getArgu2} from './printer.js';
// 2. import getArgu2, { title as printerTitle} from './printer.js'; -> default만 {}밖으로 빼서 분리가능.