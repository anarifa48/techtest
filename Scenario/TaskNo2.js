Feature('');

Scenario('Test Scenario Soal 2', async ({ I }) => {
    // Masuk ke url flip.id
    await I.amOnPage("https://flip.id/");

    // Assert
    await I.see("Bantuan");
    await I.see("Karir");
    await I.see("Biaya");
    await I.see("Masuk");

    // Klik button bantuan
    await I.click("Bantuan");
    await I.see("Pusat Bantuan");

    // kembali ke halaman utama
    await I.openNewTab()
    await I.amOnPage("https://flip.id/");

    // Klik button karir
    await I.click("Karir");
    await I.waitForElement('//body/div[1]/div[1]',1000);

    // kembali ke halaman utama
    await I.openNewTab()
    await I.amOnPage("https://flip.id/");

    // Klik button biaya
    await I.click("Biaya");
    await I.see("Pilih Layanan Flip yang Sesuai Kebutuhanmu");

    // kembali ke halaman utama
    await I.openNewTab()
    await I.amOnPage("https://flip.id/");

    // Klik button masuk
    await I.click("Masuk");
    await I.waitForElement("#email",500)
    await I.see("Silakan masuk dan mulai transfer antar bank tanpa biaya hari ini");

});
