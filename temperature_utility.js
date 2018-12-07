function C_to_F(C) {
    let result = C * 1.8 + 32
    return result;
}

function F_to_C(F) {
   let result = (F - 32) * .5556
   return result;
}

exports.C_to_F = C_to_F;
exports.F_to_C = F_to_C;