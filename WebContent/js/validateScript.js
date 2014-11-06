function LoginSubmit() {
	if (document.login.username.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อผู้ใข้');
		$('#danger').modal('show');
		return false;
	} else if (document.login.password.value == "") {
		$('#MessageAlert').text('กรุณากรอก รหัสผ่าน');
		$('#danger').modal('show');
		return false;
	}
}

function SearchStudentData() {
	if (document.frmChk.searchStudentID.value.length != 10) {
		$('#MessageAlert').text('รหัสประจำตัวนักศึกษาต้องมี 10 หลักเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (!document.frmChk.searchStudentID.value.match(/^\d*$/)) {
		$('#MessageAlert').text(
				'กรุณา กรอกรหัสประจำตัวนักศึกษาเป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	}
}

function editProfileTeacher() {
	if (document.editProfileChk.profileFirstName.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อ');
		$('#danger').modal('show');
		return false;
	} else if (document.editProfileChk.profileLastName.value == "") {
		$('#MessageAlert').text('กรุณากรอก นามสกุล');
		$('#danger').modal('show');
		return false;
	} else if (document.editProfileChk.profileEmail.value == "") {
		$('#MessageAlert').text('กรุณากรอก อีเมล');
		$('#danger').modal('show');
		return false;
	} else if (document.editProfileChk.profilePhone.value == "") {
		$('#MessageAlert').text('กรุณากรอก เบอโทรศัพท์');
		$('#danger').modal('show');
		return false;
	} else if (document.editProfileChk.profilePhone.value.length != 10) {
		$('#MessageAlert').text('หมายเลขโทรศัพท์ต้องมี 10 หลักเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (!document.editProfileChk.profilePhone.value.match(/^\d*$/)) {
		$('#MessageAlert').text(
				'กรุณา กรอกหมายหมายเลขโทรศัพท์เป็นตัวเลขเท่านั้น ');
		$('#danger').modal('show');
		return false;
	} else if (!document.editProfileChk.profileEmail.value
			.match(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*\@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.([a-zA-Z]){2,4})$/)) {
		$('#MessageAlert').text('รูปแบบ email ไม่ถูกต้อง ');
		$('#danger').modal('show');
		return false;
	}
}

function registerTeacher() {
	if (document.regisTeacherchk.IdCardTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล หมายเลขบัตรประชาชน');
		$('#danger').modal('show');
		return false;
	} else if (!document.regisTeacherchk.IdCardTeacher.value.match(/^\d*$/)) {
		$('#MessageAlert').text(
				'กรุณา กรอกหมายเลขบัตรประชาชนเป็นตัวเลขเท่านั้น ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.IdCardTeacher.value.length != 13) {
		$('#MessageAlert').text('หมายเลขบัตรประชาชนต้องมี 13 หลักเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.FirstNameTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล ชื่อ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.LastNameTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล นามสกุล');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.EducationalBackgroundTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล สถาบันการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.EducationalInstitutionTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล วุฒิการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.EducationalMajorTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล สาขาวิชา');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.EmailTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล อีเมล');
		$('#danger').modal('show');
		return false;
	} else if (!document.regisTeacherchk.EmailTeacher.value
			.match(/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*\@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.([a-zA-Z]){2,4})$/)) {
		$('#MessageAlert').text('รูปแบบ email ไม่ถูกต้อง ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.PhoneTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล เบอร์โทรศัพท์');
		$('#danger').modal('show');
		return false;
	} else if (!document.regisTeacherchk.PhoneTeacher.value.match(/^\d*$/)) {
		$('#MessageAlert').text(
				'กรุณา กรอกหมายหมายเลขโทรศัพท์เป็นตัวเลขเท่านั้น ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.PhoneTeacher.value.length != 10) {
		$('#MessageAlert').text('หมายเลขโทรศัพท์ต้องมี 10 หลักเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.VacancyTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล ตำแหน่งงาน');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.UsernameTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล username');
		$('#danger').modal('show');
		return false;
	} else if (!document.regisTeacherchk.UsernameTeacher.value
			.match(/^([a-z0-9\_])+$/i)) {
		$('#MessageAlert').text('ชื่อผู้ใช้ กรอกได้เฉพาะ a-Z, A-Z, 0-9 ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.UsernameTeacher.value.length > 15) {
		$('#MessageAlert').text('ชื่อผู้ใช้ต้องไม่เกิน 15 ตัวอักษร');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.PasswordTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล password');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.ConfirmPasswordTeacher.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล confirm password');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.PasswordTeacher.value != document.regisTeacherchk.ConfirmPasswordTeacher.value) {
		$('#MessageAlert').text('รหัสผ่านไม่ตรงกัน');
		$('#danger').modal('show');
		return false;
	} else if (!document.regisTeacherchk.PasswordTeacher.value
			.match(/^([a-z0-9\_])+$/i)) {
		$('#MessageAlert').text('รหัสผ่าน กรอกได้เฉพาะ a-Z, A-Z, 0-9 ');
		$('#danger').modal('show');
		return false;
	} else if (document.regisTeacherchk.PasswordTeacher.value.length >= 16
			|| document.regisTeacherchk.PasswordTeacher.value.length <= 5) {
		$('#MessageAlert')
				.text('รหัสผ่านต้องไม่ตำกว่า 5 ตัว และไม่เกิน 16 ตัว');
		$('#danger').modal('show');
		return false;
	}
}

function editTeacherData() {
	if (document.editTeacherDataChk.editTeacherFirstName.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล ชื่อ');
		$('#danger').modal('show');
		return false;
	} else if (document.editTeacherDataChk.editTeacherLastName.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล นามสกุล');
		$('#danger').modal('show');
		return false;
	} else if (document.editTeacherDataChk.editTeacherEducationalInstitution.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล วุฒิการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editTeacherDataChk.editTeacherEducationalMajor.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล สาขาวิชา');
		$('#danger').modal('show');
		return false;
	} else if (document.editTeacherDataChk.editTeacherEducationalBackground.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล สถาบันการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editTeacherDataChk.editTeacherVacancy.value == "") {
		$('#MessageAlert').text('กรุณากรอกข้อมูล ตำแหน่งงาน');
		$('#danger').modal('show');
		return false;
	}
}

function registerStudent() {
	if (document.registerStudentchk.studentID_stu.value == "") {
		$('#MessageAlert').text('กรุณากรอก รหัสประจำตัวนักศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (!document.registerStudentchk.studentID_stu.value.match(/^\d*$/)) {
		$('#MessageAlert').text(
				'กรุณา กรอกรหัสประจำตัวนักศึกษาเป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.studentID_stu.value.length != 10) {
		$('#MessageAlert').text('รหัสประจำตัวนักศึกษาต้องมี 10 หลักเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.firstName_stu.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อนักศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.lastName_stu.value == "") {
		$('#MessageAlert').text('กรุณากรอก นามสกุลนักศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.selectMajorName.value == "กรุณาเลือกแผนกวิชา") {
		$('#MessageAlert').text('กรุณาเลือก แผนกวิชา');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.selectEducation.value == "") {
		$('#MessageAlert').text('กรุณาเลือก ชั้นปีการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.selectEducation.value == "กรุณาเลือกชั้นปี") {
		$('#MessageAlert').text('กรุณาเลือก ชั้นปีการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.firstName_par.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อผู้ปกครอง');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.lastName_par.value == "") {
		$('#MessageAlert').text('กรุณากรอก นามสกุลผู้ปกครอง');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.addNo_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก บ้านเลขที่');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.moo_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก หมู่');
		$('#danger').modal('show');
		return false;
	} else if (!document.registerStudentchk.moo_regis.value.match(/^\d*$/)) {
		$('#MessageAlert').text('กรุณากรอก หมู่เป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.street_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก ถนน');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.subDistrict_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก ตำบล');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.district_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก อำเภอ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.province_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก จังหวัด');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.zipCode_regis.value == "") {
		$('#MessageAlert').text('กรุณากรอก รหัสไปรษณีย์');
		$('#danger').modal('show');
		return false;
	} else if (!document.registerStudentchk.zipCode_regis.value.match(/^\d*$/)) {
		$('#MessageAlert').text('กรุณากรอก รหัสไปรษณีย์เป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.firstName_stu.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ชื่อนักศึกษา ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.lastName_stu.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('นามสกุล ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.firstName_par.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ชื่อผู้ปกครอง ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.lastName_par.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('นามสกุลผู้ปกครอง ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.addNo_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('บ้านเลขที่ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.moo_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('หมู่ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.street_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ถนน ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.subDistrict_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ตำบล ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.district_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('อำเภอ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.province_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('จังหวัด ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.registerStudentchk.zipCode_regis.value
			.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('รหัสไปรษณีย์ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	}
}

function editregisterStudent() {
	if (document.editregisterStudentchk.studentFirstName.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อนักศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.studentLastName.value == "") {
		$('#MessageAlert').text('กรุณากรอก นามสกุลนักศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.selectMajorNameEdit.value == "กรุณาเลือกแผนกวิชา") {
		$('#MessageAlert').text('กรุณาเลือก แผนกวิชา');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.selectEducationEdit.value == "") {
		$('#MessageAlert').text('กรุณาเลือก ชั้นปีการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.selectEducationEdit.value == "กรุณาเลือกชั้นปี") {
		$('#MessageAlert').text('กรุณาเลือก ชั้นปีการศึกษา');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentFirstName.value == "") {
		$('#MessageAlert').text('กรุณากรอก ชื่อผู้ปกครอง');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentLastName.value == "") {
		$('#MessageAlert').text('กรุณากรอก นามสกุลผู้ปกครอง');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentAddresss.value == "") {
		$('#MessageAlert').text('กรุณากรอก บ้านเลขที่');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentMoo.value == "") {
		$('#MessageAlert').text('กรุณากรอก หมู่');
		$('#danger').modal('show');
		return false;
	} else if (!document.editregisterStudentchk.parentMoo.value.match(/^\d*$/)) {
		$('#MessageAlert').text('กรุณากรอก หมู่เป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentStreet.value == "") {
		$('#MessageAlert').text('กรุณากรอก ถนน');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentSubDistrict.value == "") {
		$('#MessageAlert').text('กรุณากรอก ตำบล');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentDistrict.value == "") {
		$('#MessageAlert').text('กรุณากรอก อำเภอ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentProvince.value == "") {
		$('#MessageAlert').text('กรุณากรอก จังหวัด');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentZipCode.value == "") {
		$('#MessageAlert').text('กรุณากรอก รหัสไปรษณีย์');
		$('#danger').modal('show');
		return false;
	} else if (!document.editregisterStudentchk.parentZipCode.value.match(/^\d*$/)) {
		$('#MessageAlert').text('กรุณากรอก รหัสไปรษณีย์เป็นตัวเลขเท่านั้น');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.studentFirstName.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ชื่อนักศึกษา ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.studentLastName.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('นามสกุลนักศึกษา ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentFirstName.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ชื่อผู้ปกครอง ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentLastName.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('นามสกุลผู้ปกครอง ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentAddresss.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('บ้านเลขที่ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentMoo.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('หมู่ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentStreet.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()]$/)) {
		$('#MessageAlert').text('ถนน ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentSubDistrict.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('ตำบล ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentDistrict.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('อำเภอ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentProvince.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('จังหวัด ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	} else if (document.editregisterStudentchk.parentZipCode.value.match(/^[.?!@&#+%:;/<>*$'",\[\]\{\}^()-]*$/)) {
		$('#MessageAlert').text('รหัสไปรษณีย์ ห้ามมีอักขระพิเศษ');
		$('#danger').modal('show');
		return false;
	}
}
/*

 function addTeacher() {
 if (document.frm.username.value == "") {
 alert('กรุณากรอกข้อมูล ชื่อผู้ใข้');
 return false;
 } else if (document.frm.password.value == "") {
 alert('กรุณากรอกข้อมูล รหัสผ่าน');
 return false;
 } else if (document.frm.confirmPassword.value == "") {
 alert('กรุณากรอกข้อมูล ยืนยันรหัสผ่าน');
 return false;
 } else if (document.frm.firstName.value == "") {
 alert('กรุณากรอกข้อมูล ชื่อ');
 return false;
 } else if (document.frm.lastName.value == "") {
 alert('กรุณากรอกข้อมูล นามสกุล');
 return false;
 } else if (document.frm.idCard.value == "") {
 alert('กรุณากรอกข้อมูล หมายเลขบัตรประชาชน');
 return false;
 } else if (document.frm.vacancy.value == "") {
 alert('กรุณากรอกข้อมูล ตำแหน่ง');
 return false;
 } else if (document.frm.address.value == "") {
 alert('กรุณากรอกข้อมูล ที่อยู่');
 return false;
 } else if (document.frm.phone.value == "") {
 alert('กรุณากรอกข้อมูล หมายเลขโทรศัพ');
 return false;
 } else if (document.frm.email.value == "") {
 alert('กรุณากรอกข้อมูล อีเมล์');
 return false;
 } else if (document.frm.password.value != document.frm.confirmPassword.value) {
 alert('รหัสผ่านไม่ตรงกัน');
 return false;
 } else if (!document.frm.username.value.match(/^([a-z0-9\_])+$/i)) {
 alert("ชื่อผู้ใช้ กรอกได้เฉพาะ a-Z, A-Z, 0-9 ");
 return false;
 } else if (document.frm.username.value.length > 15) {
 alert("ชื่อผู้ใช้ต้องไม่เกิน 15 ตัวอักษร");
 return false;
 } else if (!document.frm.password.value.match(/^([a-z0-9\_])+$/i)) {
 alert(document.frm.password.value);
 alert("รหัสผ่าน กรอกได้เฉพาะ a-Z, A-Z, 0-9 ");
 return false;
 } else if (document.frm.password.value.length >= 16
 || document.frm.password.value.length <= 8) {
 alert("รหัสผ่านต้องไม่ตำกว่า 8 ตัว และไม่เกิน 16 ตัว");
 return false;
 } else if (document.frm.idCard.value.length != 13) {
 alert("หมายเลขบัตรประชาชนต้องมี 13 หลักเท่านั้น");
 return false;
 } else if (!document.frm.idCard.value.match(/^\d*$/)) {
 alert("กรุณา กรอกหมายเลขบัตรประชาชนเป็นตัวเลขเท่านั้น ");
 return false;
 } else if (document.frm.phone.value.length != 10) {
 alert("หมายเลขโทรศัพท์ต้องมี 13 หลักเท่านั้น");
 return false;
 } else if (!document.frm.phone.value.match(/^\d*$/)) {
 alert("กรุณา กรอกหมายหมายเลขโทรศัพท์เป็นตัวเลขเท่านั้น ");
 return false;
 }
 }

 function editTeacherchk() {
 if (document.editfrm.firstName.value == "") {
 alert('กรุณากรอกข้อมูล ชื่อ');
 return false;
 } else if (document.editfrm.lastName.value == "") {
 alert('กรุณากรอกข้อมูล นามสกุล');
 return false;
 } else if (document.editfrm.vacancy.value == "") {
 alert('กรุณากรอกข้อมูล ตำแหน่ง');
 return false;
 } else if (document.editfrm.address.value == "") {
 alert('กรุณากรอกข้อมูล ที่อยู่');
 return false;
 } else if (document.editfrm.phone.value == "") {
 alert('กรุณากรอกข้อมูล หมายเลขโทรศัพ');
 return false;
 } else if (document.editfrm.email.value == "") {
 alert('กรุณากรอกข้อมูล อีเมล์');
 return false;
 } else if (!document.editfrm.username.value.match(/^([a-z0-9\_])+$/i)) {
 alert("ชื่อผู้ใช้ กรอกได้เฉพาะ a-Z, A-Z, 0-9 ");
 return false;
 } else if (document.editfrm.username.value.length > 15) {
 alert("ชื่อผู้ใช้ต้องไม่เกิน 15 ตัวอักษร");
 return false;
 } else if (document.editfrm.phone.value.length != 10) {
 alert("หมายเลขโทรศัพท์ต้องมี 13 หลักเท่านั้น");
 return false;
 } else if (!document.editfrm.phone.value.match(/^\d*$/)) {
 alert("กรุณา กรอกหมายหมายเลขโทรศัพท์เป็นตัวเลขเท่านั้น ");
 return false;
 }
 if (!document.editfrm.newpassword.value == "") {
 if (document.editfrm.newpassword.value != document.frm.confirmPassword.value) {
 alert('รหัสผ่านไม่ตรงกัน');
 return false;
 } else if (!document.editfrm.newpassword.value
 .match(/^([a-z0-9\_])+$/i)) {
 alert(document.editfrm.newpassword.value);
 alert("รหัสผ่าน กรอกได้เฉพาะ a-Z, A-Z, 0-9 ");
 return false;
 } else if (document.editfrm.newpassword.value.length >= 16
 || document.frm.newpassword.value.length <= 8) {
 alert("รหัสผ่านต้องไม่ตำกว่า 8 ตัว และไม่เกิน 16 ตัว");
 return false;
 }
 }
 }
 function addRoomchk() {
 if (document.addRoom.RoomId.value == "") {
 alert("กรุณากรอกรหัสห้องเรียน");
 return false;
 } else if (document.addRoom.RoomCapacity.value == "") {
 alert("กรุณากรอกความจุของห้อง");
 return false;
 } else if (!document.addRoom.RoomCapacity.value.match(/^\d*$/)) {
 alert("ความจุของห้องต้องเป็นตัวเลขเท่านั้น");
 return false;
 } else if (document.addRoom.Build.value == "") {
 alert("กรุณากรอกอาคาร");
 return false;
 }
 }
 function editRoomchk() {
 if (document.editRoomfrm.RoomCapacity.value == "") {
 alert("กรุณากรอกความจุของห้อง");
 return false;
 } else if (!document.editRoomfrm.RoomCapacity.value.match(/^\d*$/)) {
 alert("ความจุของห้องต้องเป็นตัวเลขเท่านั้น");
 return false;
 } else if (document.editRoomfrm.Build.value == "") {
 alert("กรุณากรอกอาคาร");
 return false;
 }
 }
 function addHolidaychk() {
 if (document.addHolidayfrm.StartDate.value == "") {
 alert("กรุณากรอก วัน/เดือน/ปี");
 return false;
 } else if (document.addHolidayfrm.EndDate.value == "") {
 alert("กรุณากรอก วัน/เดือน/ปี");
 return false;
 } else if (document.addHolidayfrm.detail.value == "") {
 alert("กรุณากรอก รายละเอียด");
 return false;
 }
 }
 function editHolidaychk() {

 if (document.editHolidayfrm.detail.value == "") {
 alert("กรุณากรอก รายละเอียด");
 return false;
 }
 }
 function addCoursechk() {

 if (document.addCoursefrm.courseId.value == "") {
 alert("กรุณากรอก รหัสวิชา");
 return false;
 } else if (document.addCoursefrm.courseName.value == "") {
 alert("กรุณากรอก ชื่อวิชา");
 return false;
 } else if (document.addCoursefrm.addStartDate.value == "") {
 alert("กรุณากรอก วันเปิดเทอมการศึกษา");
 return false;
 } else if (document.addCoursefrm.addEndDate.value == "") {
 alert("กรุณากรอก วันสิ้นสุดเทอมการศึกษา");
 return false;
 }
 }
 function editCoursechk() {
 if (document.editCoursefrm.courseName.value == "") {
 alert("กรุณากรอก ชื่อวิชา");
 return false;
 } else if (document.editCoursefrm.startDate.value == "") {
 alert("กรุณากรอก วันเปิดเทอมการศึกษา");
 return false;
 } else if (document.editCoursefrm.endDate.value == "") {
 alert("กรุณากรอก วันสิ้นสุดเทอมการศึกษา");
 return false;
 }
 }
 function addMakeUpchk() {
 if (document.addMakeUpfrm.a_date.value == "") {
 alert("กรุณากรอก วัน/เดือน/ปี");
 return false;
 }
 }
 function CancelClasschk() {
 if (document.CancelClassfrm.c_because.value == "") {
 alert("กรุณากรอก หมายเหตุ");
 return false;
 }
 }
 */

//if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/
//		.test(datatype)) {
//	
//}
