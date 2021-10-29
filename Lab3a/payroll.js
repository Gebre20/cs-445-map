var Payroll;
(function (Payroll) {
    Payroll[Payroll["FICA"] = 10] = "FICA";
    Payroll[Payroll["STATE"] = 5] = "STATE";
    Payroll[Payroll["MEDICARE"] = 12] = "MEDICARE";
})(Payroll || (Payroll = {}));
;
var ma = Payroll.STATE;
console.log(ma);
