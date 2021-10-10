/**
 * 
 */

 var TaxBracket =
 {
   TB_ZERO: 0,
   TB_ONE: 1,
   TB_TWO: 2,
   TB_THREE: 3,
 };
 
 var IncomeTaxBracketEnum =
 {
   INCOME_LOWER: 0,
   INCOME_WITHIN: 1,
   INCOME_GREATER: 2,
 };
 
 /**
  * 
  */
 
 function returnTaxIncomeBracketV000(minBracket, maxBracket, grossSalary) {
   var result;
   var incomeTaxBracketState;
 
   if ((grossSalary < minBracket)) {
     incomeTaxBracketState = IncomeTaxBracketEnum.INCOME_LOWER;
   }
   else if ((minBracket <= grossSalary) && (grossSalary < maxBracket)) {
     incomeTaxBracketState = IncomeTaxBracketEnum.INCOME_WITHIN;
   }
   else if ((maxBracket <= grossSalary)) {
     incomeTaxBracketState = IncomeTaxBracketEnum.INCOME_GREATER;
   }
 
 
   switch (incomeTaxBracketState) {
     case IncomeTaxBracketEnum.INCOME_LOWER:
       result = 0;
       break;
     case IncomeTaxBracketEnum.INCOME_WITHIN:
       result = grossSalary - minBracket;
       break;
     case IncomeTaxBracketEnum.INCOME_GREATER:
       result = maxBracket - minBracket;
       break;
     default:
       result = Error;
       break;
   }
 
   return result;
 }