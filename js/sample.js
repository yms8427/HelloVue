var instance = {
  data() {
    return {
      firstName: "",
      lastName: "",
      gender: null,
      city: null,
      selectedCity: null,
      records: [],
      cities: [
          { code: "01", label: "Adana" },
          { code: "06", label: "Ankara" },
          { code: "34", label: "İstanbul" },
          { code: "36", label: "Kars" },
          { code: "35", label: "İzmir" },
          { code: "07", label: "Antalya" },
          { code: "61", label: "Trabzon" },
          { code: "67", label: "Zonguldak" },
          { code: "33", label: "Mersin" },
          { code: "44", label: "Malatya" }
      ],
      validation: {
        firstNameIsInvalid: false,
        lastNameIsInvalid: false,
        cityIsInvalid: false,
        genderIsInvalid: false,
      },
    };
  },
  methods: {
    save() {
      this.validation.firstNameIsInvalid = false;
      this.validation.lastNameIsInvalid = false;
      this.validation.cityIsInvalid = false;
      this.validation.genderIsInvalid = false;

      var hasError = false;
      if (checkIfEmpty(this.firstName)) {
        this.validation.firstNameIsInvalid = true;
        hasError = true;
      }
      if (checkIfEmpty(this.lastName)) {
        this.validation.lastNameIsInvalid = true;
        hasError = true;
      }
      if (checkIfEmpty(this.city)) {
        this.validation.cityIsInvalid = true;
        hasError = true;
      }
      if (checkIfEmpty(this.gender)) {
        this.validation.genderIsInvalid = true;
        hasError = true;
      }

      if (hasError) {
        return;
      }

      this.records.push({
        fullName: this.firstName + " " + this.lastName,
        imagePath: this.gender === "male" ? "img/male.png" : "img/female.png",
        city: this.city,
      });
      this.firstName = "";
      this.lastName = "";
      this.gender = null;
      this.city = null;
      this.selectedCity = null;
    },
    remove(index) {
      this.records.splice(index, 1);
    },
    cityChanged(e) {
        // var opt = this.cities.find(f => f.code == e.target.value);
        var opt = this.cities.find(function(f) { return f.code == e.target.value});
        this.city = opt.label;
        this.selectedCity = opt.code;
    }
  },
  mounted() {
    // Test verisi
    this.records.push({
      fullName: "Can Perk",
      imagePath: "img/male.png",
      city: "Ankara",
    });
    this.records.push({
      fullName: "Hami Aktaş",
      imagePath: "img/male.png",
      city: "Antalya",
    });
    this.records.push({
      fullName: "Elif Yücel",
      imagePath: "img/female.png",
      city: "İstanbul",
    });
  },
};

function checkIfEmpty(value) {
  if (value) {
    return false;
  }
  return true;
}

Vue.createApp(instance).mount("#app");
