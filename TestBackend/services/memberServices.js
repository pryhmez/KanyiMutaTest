const memberModel = require("../models/user");
const bcrypt = require("bcrypt");

const findUserWithId = function (_id) {
  return userModel.findOne({ _id }).select('-password')
}


const register = async function (memberData, memberParams) {

  // const user = await userModel.findOne({ _id: userParams });

  let member = await new memberModel();

  member.firstName = memberData.firstName;
  member.middleName = memberData.middleName
  member.lastName = memberData.lastName;

  member.gender = memberData.gender;

  member.email = memberData.email;
  member.phone = memberData.phone;

  member.dateOfBirth = memberData.dateOfBirth;
  member.placeOfBirth = memberData.placeOfBirth;

  member.doYouHavePassport = memberData.doYouHavePassport;
  member.needPassport = memberData.needPassport;
  member.passportExpirationDate = memberData.passportExpirationDate;

  member.addressInTheUnitedStates = memberData.addressInTheUnitedStates;
  member.diasporaLocation = memberData.diasporaLocation;

  member.stateOfOrigin = memberData.stateOfOrigin;
  member.disability = memberData.disability;

  member.nextOfKin = memberData.nextOfKin;
  member.nextOfKinAddress = memberData.nextOfKinAddress;
  member.nextOfKinPhone = memberData.nextOfKinPhone;

  member.passportProcessingCountry = memberData.passportProcessingCountry;
  member.passportProcessingState = memberData.passportProcessingState;
  member.passportProcessingOffice = memberData.passportProcessingOffice;

  member.jurisdictionEmbassyCloseToYou = memberData.jurisdictionEmbassyCloseToYou;
  member.signature = memberData.signature;

  member.dateRegistered = memberData.dateRegistered;
 

  return member.save();
};


module.exports = {
  register
}
