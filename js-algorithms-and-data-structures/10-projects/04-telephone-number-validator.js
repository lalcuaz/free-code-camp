/* return true if the string looks like a
      valid US phone number
      the function has to accept all valid formats
      for US numbers.
      the area code is required, if country
      code is provide, confirm that the code
      is 1.
      acceptable formats:
      555-555-5555
      5555555555
      (555)555-5555
      (555) 555-5555
      555 555 5555
      1 555 555 5555
      1(555)555-5555
      1 (555) 555-5555
      1 555-555-5555

      */
function telephoneCheck(str) {
  const regex =
    /^1\s{0,1}\d{3}[\s\-]{0,1}\d{3}[\s\-]{0,1}\d{4}$|^1\s{0,1}\(\d{3}\)[\s\-]{0,1}\d{3}[\s\-]{0,1}\d{4}$|^\d{3}[\s\-]{0,1}\d{3}[\s\-]{0,1}\d{4}$|^\(\d{3}\)[\s\-]{0,1}\d{3}[\s\-]{0,1}\d{4}$/;
  if (regex.test(str)) {
    return true;
  } else {
    return false;
  }
}

telephoneCheck("555-555-5555");
