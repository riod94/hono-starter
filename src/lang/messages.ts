const messages: { [key: string]: { [key: string]: string } } = {
    // Indonesia
    id: {
        // Start of validation
        'The :field field is required': ':field wajib diisi',
        'The :field field must be defined': ':field harus terdefinisi',
        'The :field field must be a string': ':field harus berupa teks',
        'The :field field must be a valid email address': ':field harus berupa alamat email yang valid',
        'The :field field must be a valid mobile phone number': ':field harus berupa nomor telepon yang valid',
        'The :field field must be a valid :providersList card number': ':field harus berupa nomor kartu :providersList yang valid',
        'The :field field must be a valid passport number': ':field harus berupa nomor paspor yang valid',
        'The :field field must be a valid postal code': ':field harus berupa kode pos yang valid',
        'The :field field format is invalid': ':field format tidak valid',
        'The :field field must only contain ASCII characters': ':field harus hanya berisi karakter ASCII',
        'The :field field must be a valid IBAN number': ':field harus berupa nomor IBAN yang valid',
        'The :field field must be a valid JWT token': ':field harus berupa token JWT yang valid',
        'The :field field must contain latitude and longitude coordinates': ':field harus berisi koordinat latitude dan longitude',
        'The :field field must be a valid URL': ':field harus berupa URL yang valid',
        'The :field field must contain only letters': ':field harus berisi hanya huruf',
        'The :field field must contain only letters and numbers': ':field harus berisi hanya huruf dan angka',
        'The :field field must have at least :min characters': ':field harus memiliki minimal :min karakter',
        'The :field field must not be greater than :max characters': ':field tidak boleh melebihi :max karakter',
        'The :field field must be :size characters long': ':field harus berisi :size karakter',
        'The :field field and :otherField field must be the same': ':field dan :otherField field harus sama',
        'The :field field must end with :substring': ':field harus diakhiri dengan :substring',
        'The :field field must start with :substring': ':field harus diawali dengan :substring',
        'The :field field and :otherField field must be different': ':field dan :otherField field harus berbeda',
        'The selected :field is invalid': ':field yang dipilih tidak valid',
        'The :field field must be a valid IP address': ':field harus berupa alamat IP yang valid',
        'The :field field must be a valid UUID': ':field harus berupa UUID yang valid',
        'The :field field must be a valid hex color code': ':field harus berupa kode warna hex yang valid',

        'The value must be a boolean': 'Nilai harus boolean',

        'The :field field must be a number': ':field harus berupa angka',
        'The selected :field is not in :values': ':field yang dipilih tidak ada di :values',
        'The :field field must be at least :min': ':field harus minimal :min',
        'The :field field must not be greater than :max': ':field tidak boleh melebihi :max',
        'The :field field must be between :min and :max': ':field harus antara :min dan :max',
        'The :field field must be positive': ':field harus positif',
        'The :field field must be negative': ':field harus negatif',
        'The :field field must have :digits decimal places': ':field harus memiliki :digits angka desimal',
        'The :field field must be an integer': ':field harus berupa bilangan bulat',

        'The :field field must be accepted': ':field harus diterima',

        'The :field field must be :expectedValue': ':field harus :expectedValue',

        'The :field field must be an object': ':field harus berupa objek',

        'The :field field must be an array': ':field harus berupa array',
        'The :field field must have at least :min items': ':field harus memiliki minimal :min item',
        'The :field field must not have more than :max items': ':field tidak boleh melebihi :max item',
        'The :field field must contain :size items': ':field harus berisi :size item',
        'The :field field must not be empty': ':field tidak boleh kosong',
        'The :field field has duplicate values': ':field memiliki nilai duplikat',

        'Invalid value provided for :field field': 'Nilai yang diberikan untuk :field field tidak valid',

        'The :field field must be a datetime value': ':field harus berupa nilai Waktu Tanggal yang valid',
        'The :field field must be a date equal to :expectedValue': ':field harus berupa tanggal yang sama dengan :expectedValue',
        'The :field field must be a date after :expectedValue': ':field harus berupa tanggal setelah :expectedValue',
        'The :field field must be a date before :expectedValue': ':field harus berupa tanggal sebelum :expectedValue',
        'The :field field must be a date after or equal to :expectedValue': ':field harus berupa tanggal setelah atau sama dengan :expectedValue',
        'The :field field must be a date before or equal to :expectedValue': ':field harus berupa tanggal sebelum atau sama dengan :expectedValue',

        'The :field field must be a date after :otherField': ':field harus berupa tanggal setelah :otherField',
        'The :field field must be a date after or same as :otherField': ':field harus berupa tanggal setelah atau sama dengan :otherField',
        'The :field field must be a date before :otherField': ':field harus berupa tanggal sebelum :otherField',
        'The :field field must be a date before or same as :otherField': ':field harus berupa tanggal sebelum atau sama dengan :otherField',

        'The :field field is not a weekend': ':field bukan merupakan hari libur',
        'The :field field is not a weekday': ':field bukan merupakan hari kerja',
        // end of validation messages

        // start of message errors
        'The given data was invalid': 'Data yang diberikan tidak valid',
        'Unauthorized': 'Tidak diizinkan',
        'Error: Private key not found': 'Error: Kunci privat tidak ditemukan',
        'Unauthorized: Algorithm not implemented': 'Tidak diizinkan: Algoritma tidak ditemukan',
        'Unauthorized: Invalid token': 'Tidak diizinkan: Token tidak valid',
        'Unauthorized: Token not yet valid': 'Tidak diizinkan: Token belum valid',
        'Unauthorized: Token expired': 'Tidak diizinkan: Token kadaluarsa',
        'Unauthorized: Token issued in the future': 'Tidak diizinkan: Token diterbitkan di masa depan',
        'Unauthorized: Invalid header': 'Tidak diizinkan: Header tidak valid',
        'Unauthorized: Token signature mismatched': 'Tidak diizinkan: Tanda tangan token tidak cocok',
    },
};

export default messages