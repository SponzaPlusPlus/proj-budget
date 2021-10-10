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

enum ExpensePriorityState
{
	EPS_UNASSIGNED = 0,
	EPS_ESSENTIAL = 1,
	EPS_LUXURY = 2,
	EPS_UNKNOWN = 3,
	EPS_NULL = 4,
	EPS_UNCATEGORISED = 5,
	EPS_MULTI_CATEGORY = 6,
	EPS_ALL_CATEGORIES = 7,
	EPS_NOT_AVAILABLE = 8,
	EPS_NOT_APPLICABLE = 9,
	EPS_ERROR = 10,
	EPS_TEST = 11,
}

enum TaxBracket
{
	TB_ZERO = 1,
	TB_ONE,
	TB_TWO,
	TB_THREE,
}

const greeter = (person: string) =>
{
	return `Hello, ${person}!`;
}
  
let user = 'Grant';
Logger.log(greeter(user));