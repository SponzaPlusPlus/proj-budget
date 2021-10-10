/**
 * Org:
 * Proj: 
 * Program: 
 * Program Version:
 * Module: Data Logging
 * Authors: Leonard Sponza
 * Created On: 10/10/2021
 * Last Modified: 10/10/2020 12:20 
 * Date Time Version: 00
 * 
 * Description: ...
 * @brief (?)
 */

 enum TaxBracket
 {
    TB_ZERO = 1,
    TB_ONE,
    tb_TWO,
    TB_THREE,
  }

const greeter = (person: string) =>
{
    return `Hello, ${person}!`;
}
  
let user = 'Grant';
Logger.log(greeter(user));