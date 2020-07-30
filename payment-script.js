javascript: (function() {
    var typeOfPayment = "ExternalAccount:DM";
    var paymentNumber = "5555444433331111";
    var monthPayment = "10";
    var yearPayment = "20";
    var cvvValue = "737";
    var limiteLetrasNombrePassenger = 8;
    var aLetras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"];

    function definirNombre(maxLetras) {
        var result = "";
        for (var indice = 0; indice < maxLetras; indice++) {
            var cLetra = aLetras[Math.floor(Math.random() * aLetras.length)];
            result = result + cLetra
        }
        return result
    }

    function getDatePayment() { return monthPayment + "/" + yearPayment; }

    function setTypePayment() { jQuery("#paymentMethodSelectCombobox").val(typeOfPayment).trigger('change') }

    function setCardNumber() { var paymentNumberElement = document.getElementById("CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_DM_ACCTNO"); if (paymentNumberElement != null) { paymentNumberElement.value = paymentNumber; } }

    function setCardNumberCheckin() { var paymentNumberElement = document.getElementById("CONTROLGROUPPAYMENTBOTTOMCheckIn_ControlGroupPaymentInputViewPaymentCheckInView_ExternalAccount_DM_ACCTNO"); if (paymentNumberElement != null) { paymentNumberElement.value = paymentNumber; } }

    function setExpiredDate() { var elementDate = jQuery("#CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_DM_EXPDAT_MONTH_YEAR"); if (elementDate != null) { elementDate.val(getDatePayment()).trigger('change'); } }

    function setExpiredDateCheckin() { var elementDate = jQuery("#CONTROLGROUPPAYMENTBOTTOMCheckIn_ControlGroupPaymentInputViewPaymentCheckInView_ExternalAccount_DM_EXPDAT_MONTH_YEAR"); if (elementDate != null) { elementDate.val(getDatePayment()).trigger('change'); } }

    function setSeriesCode() { var element = document.getElementById("CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_DM_CC::VerificationCode"); if (element != null) { element.value = cvvValue; } }

    function setSeriesCodeCheckin() { var element = document.getElementById("CONTROLGROUPPAYMENTBOTTOMCheckIn_ControlGroupPaymentInputViewPaymentCheckInView_ExternalAccount_DM_CC::VerificationCode"); if (element != null) { element.value = cvvValue; } }

    function setHolderName(maxLetras) { var name = definirNombre(maxLetras); var nameElement = document.getElementById("CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_ExternalAccount_DM_CC::AccountHolderName"); if (nameElement != null) { nameElement.value = name; } }

    function setHolderNameCheckin(maxLetras) { var name = definirNombre(maxLetras); var nameElement = document.getElementById("CONTROLGROUPPAYMENTBOTTOMCheckIn_ControlGroupPaymentInputViewPaymentCheckInView_ExternalAccount_DM_CC::AccountHolderName"); if (nameElement != null) { nameElement.value = name; } }

    function checkAceptarCondiciones() { jQuery("#CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_CheckboxConditionsPaymentView_LegalConditions").prop('checked', true) }

    function submitBotonSiguiente() { var element = document.getElementById("CONTROLGROUPPAYMENTBOTTOM_ControlGroupPaymentInputViewPaymentView_LinkButtonSubmit"); if (element != null) { element.click(); } }

    function submitBotonSiguienteCheckin() { var element = document.getElementById("CONTROLGROUPPAYMENTBOTTOMCheckIn_ControlGroupPaymentInputViewPaymentCheckInView_LinkButtonSubmit"); if (element != null) { element.click(); } }

    function execute() {
        setTypePayment(typeOfPayment);
        setHolderName(limiteLetrasNombrePassenger);
        setHolderNameCheckin(limiteLetrasNombrePassenger);
        setCardNumber();
        setCardNumberCheckin();
        setExpiredDate();
        setExpiredDateCheckin();
        setSeriesCode();
        setSeriesCodeCheckin();
        checkAceptarCondiciones();
        submitBotonSiguiente();
        submitBotonSiguienteCheckin();
    }
    execute()
})();