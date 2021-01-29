<template>
  <div class="order">
    <h3 class="title1">Оформление заказа</h3>
    <div class="containers">
      <div class="order-form">
        <!-- <form action="" method="POST" class="order-form"> -->
        <div class="order__row">
          <div class="order__column">
            <div
              class="order__title"
              data-tab="contact"
              @click="switchTabsClass('contact')"
            >
              <svg
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M124.586 63L62.9998 1.41418L1.41406 63L62.9998 124.586L124.586 63ZM63.707 0.707076C63.3164 0.316552 62.6833 0.316552 62.2927 0.707076L0.706952 62.2929C0.316428 62.6834 0.316427 63.3166 0.706952 63.7071L62.2927 125.293C62.6833 125.683 63.3164 125.683 63.707 125.293L125.293 63.7071C125.683 63.3166 125.683 62.6834 125.293 62.2929L63.707 0.707076ZM85.3436 56.133C85.3436 54.4917 84.0081 53.1562 82.3669 53.1562C81.5721 53.1562 80.824 53.466 80.2623 54.0284L78.3171 55.9735L76.1561 58.1345V51.7912C78.3788 51.471 80.0936 49.5593 80.0936 47.25C80.0936 44.7168 78.033 42.6562 75.4998 42.6562H49.2498C46.7167 42.6562 44.6561 44.7168 44.6561 47.25V80.0625C44.6561 80.4247 44.9501 80.7187 45.3123 80.7187H48.5936V82.6875C48.5936 83.0497 48.8876 83.3437 49.2498 83.3437H75.4998C75.8621 83.3437 76.1561 83.0497 76.1561 82.6875V66.5529L82.5263 60.1827L83.2003 59.5087C82.8604 61.2018 82.0315 62.7585 80.7833 64.0073L77.6615 67.1291L78.5895 68.057L81.7113 64.9352C83.5737 63.0728 84.6152 60.6132 84.6762 57.9888C85.1008 57.4625 85.3436 56.8194 85.3436 56.133ZM81.1902 54.9563C81.5045 54.642 81.9226 54.4687 82.3669 54.4687C83.2843 54.4687 84.0311 55.2155 84.0311 56.133C84.0311 56.5773 83.8578 56.9953 83.5435 57.3096L82.0623 58.7908L79.709 56.4375L81.1902 54.9563ZM78.7811 57.3654L79.4938 58.0781L71.2342 66.3377L70.5215 65.625L78.7811 57.3654ZM63.1735 74.6832L64.5234 71.9827L66.5171 73.9764L63.8166 75.3263L63.1735 74.6832ZM65.2715 70.875L69.5936 66.5529L71.9469 68.9062L67.6248 73.2283L65.2715 70.875ZM75.4998 43.9687C77.3091 43.9687 78.7811 45.4407 78.7811 47.25C78.7811 49.0592 77.3091 50.5312 75.4998 50.5312H52.4589C53.312 49.6965 53.8436 48.5349 53.8436 47.25C53.8436 45.965 53.312 44.8035 52.4589 43.9687H75.4998ZM49.9061 50.4649V48.5625C49.9061 48.2009 50.2008 47.9062 50.5623 47.9062H52.4648C52.203 49.1898 51.1897 50.2031 49.9061 50.4649ZM45.9686 79.4062V47.25C45.9686 45.4407 47.4406 43.9687 49.2498 43.9687C50.834 43.9687 52.1597 45.0981 52.4648 46.5937H50.5623C49.4769 46.5937 48.5936 47.477 48.5936 48.5625V79.4062H45.9686ZM74.8436 82.0312H49.9061V51.8437H74.8436V59.447L71.9469 62.3437H52.5311V63.6562H70.6344L69.3219 64.9687H52.5311V66.2812H68.0094L63.8796 70.411C63.8284 70.4622 63.795 70.5232 63.7641 70.5849L63.7569 70.581L61.7882 74.5185C61.6622 74.7711 61.7114 75.0763 61.9115 75.2758L62.1032 75.4687L60.5984 76.9735L61.5263 77.9014L63.0311 76.3967L63.2234 76.5889C63.3494 76.7149 63.5174 76.7812 63.6873 76.7812C63.7864 76.7812 63.8875 76.7583 63.9807 76.7123L67.9182 74.7436L67.9143 74.7363C67.9759 74.7055 68.037 74.672 68.0882 74.6208L73.3382 69.3708L74.8436 67.8654V82.0312ZM72.8748 67.9783L72.1622 67.2656L80.4217 59.006L81.1344 59.7187L72.8748 67.9783ZM72.2186 54.4687H52.5311V55.7812H72.2186V54.4687ZM52.5311 57.0937H72.2186V58.4062H52.5311V57.0937ZM72.2186 59.7187H52.5311V61.0312H72.2186V59.7187ZM52.5311 75.4687H59.7498V76.7812H52.5311V75.4687ZM72.2186 78.0937H52.5311V79.4062H72.2186V78.0937Z"
                  fill="#3967d6"
                />
              </svg>

              <h1>Контактная информация</h1>
            </div>
            <div class="order-wrap">
              <div
                class="order-block"
                :class="{ isBlockActive: isBlockActive }"
                data-tab="block"
                v-if="isBlockActive"
              >
                <div class="order__btn">
                  <input
                    type="button"
                    class="nav-a"
                    data-tab="individual"
                    value="Физическое лицо"
                    :class="{ isIndivActive: isIndivActive }"
                    @click="switchTabs('individual')"
                  />

                  <input
                    type="button"
                    class="nav-a"
                    data-tab="entity"
                    value="Юридическое лицо"
                    :class="{ isEntityActive: isEntityActive }"
                    @click="switchTabs('entity')"
                  />
                </div>

                <div class="" data-tab="hello" v-if="isIndivActive">
                  <!-- <span
                    v-if="$v.phone.$error || $v.name.$error || $v.email.$error"
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span> -->

                  <span
                    v-if="
                      ($v.name.$dirty || $v.phone.$dirty || $v.email.$dirty) &&
                      (name.length && phone.length && email.length) === 0
                    "
                    class="span-error"
                  >
                    Пожалуйста, заполните все поля
                  </span>

                  <span
                    v-else-if="
                      $v.name.$error || $v.phone.$error || $v.email.$error
                    "
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span>

                  <div class="order-form__first">
                    <div class="order-form__name">
                      <input
                        type="text"
                        id="name"
                        v-model="name"
                        :class="{ 'error-valid': $v.name.$error }"
                        required
                      />
                      <label for="name">ФИО</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="email"
                        v-model="email"
                        :class="{ 'error-valid': $v.email.$error }"
                        required
                      />
                      <label for="email">Электронная почта</label>
                    </div>
                    <div class="order-form__phone">
                      <input
                        type="text"
                        id="phone"
                        v-model="phone"
                        v-mask="'+7(###)###-####'"
                        :class="{ 'error-valid': $v.phone.$error }"
                        required
                      />
                      <label for="phone">Телефон</label>
                    </div>
                  </div>
                  <div class="order-form__button">
                    <input
                      type="button"
                      value="Продолжить"
                      data-tab="block"
                      @click="validIndiv()"
                      :class="{
                        btnotactive:
                          ($v.phone.$dirty && $v.phone.$error) ||
                          ($v.email.$dirty && $v.email.$error) ||
                          ($v.name.$dirty && $v.name.$error),
                      }"
                      :disabled="
                        ($v.phone.$dirty && $v.phone.$error) ||
                        ($v.email.$dirty && $v.email.$error) ||
                        ($v.name.$dirty && $v.name.$error)
                      "
                    />
                    <!-- @click="switchTabsClass('block')"
                      :class="{
                        btnotactive:
                          $v.phone.$error ||
                          $v.email.$error ||
                          $v.name.$error ||
                          (name.length && phone.length && email.length) === 0,
                      }"
                      :disabled="
                        $v.phone.$error ||
                        $v.email.$error ||
                        $v.name.$error ||
                        (name.length && phone.length && email.length) === 0
                      " -->
                  </div>
                </div>
                <div class="" data-tab="world" v-if="isEntityActive">
                  <span
                    v-if="
                      ($v.name.$dirty ||
                        $v.phone.$dirty ||
                        $v.email.$dirty ||
                        $v.company.$dirty ||
                        $v.address.$dirty ||
                        $v.inn.$dirty ||
                        $v.kpp.$dirty ||
                        $v.bik.$dirty ||
                        $v.scope.$dirty) &&
                      (name.length &&
                        phone.length &&
                        email.length &&
                        company.length &&
                        address.length &&
                        inn.length &&
                        kpp.length &&
                        bik.length &&
                        scope.length) === 0
                    "
                    class="span-error"
                  >
                    Пожалуйста, заполните все поля
                  </span>

                  <span
                    v-else-if="
                      $v.name.$error ||
                      $v.phone.$error ||
                      $v.email.$error ||
                      $v.address.$error ||
                      $v.company.$error ||
                      $v.inn.$error ||
                      $v.bik.$error ||
                      $v.kpp.$error ||
                      $v.scope.$error
                    "
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span>
                  <!-- <span
                    v-if="
                      $v.$invalid &&
                      (name.length &&
                        phone.length &&
                        email.length &&
                        company.length &&
                        address.length &&
                        inn.length &&
                        kpp.length &&
                        bik.length &&
                        scope.length) === 0
                    "
                    class="span-error"
                  >
                    Пожалуйста, заполните все поля
                  </span> -->
                  <!-- <span
                    v-if="
                      $v.phone.$error ||
                      $v.name.$error ||
                      $v.email.$error ||
                      $v.address.$error ||
                      $v.company.$error ||
                      $v.inn.$error ||
                      $v.bik.$error ||
                      $v.kpp.$error ||
                      $v.scope.$error
                    "
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span> -->
                  <div class="order-form__first">
                    <div class="order-form__name">
                      <input
                        type="text"
                        id="name"
                        v-model="name"
                        :class="{ 'error-valid': $v.name.$error }"
                        required
                      />
                      <label for="name">ФИО</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="email"
                        v-model="email"
                        :class="{ 'error-valid': $v.email.$error }"
                        required
                      />
                      <label for="email">Электронная почта</label>
                    </div>
                    <div class="order-form__phone">
                      <input
                        type="text"
                        id="phone"
                        v-model="phone"
                        v-mask="'+7(###)###-####'"
                        :class="{ 'error-valid': $v.phone.$error }"
                        required
                      />
                      <label for="phone">Телефон</label>
                    </div>
                  </div>
                  <div class="order-form__second">
                    <div class="order-form__name">
                      <input
                        type="text"
                        id="company"
                        v-model="company"
                        :class="{ 'error-valid': $v.company.$error }"
                        required
                      />
                      <label for="company">Название компании</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="address"
                        v-model="address"
                        :class="{ 'error-valid': $v.address.$error }"
                        required
                      />
                      <label for="address">Юр.адрес</label>
                    </div>
                  </div>
                  <div class="order-form__third">
                    <div class="order-form__name">
                      <input
                        type="text"
                        id="inn"
                        v-model="inn"
                        :class="{ 'error-valid': $v.inn.$error }"
                        required
                      />
                      <label for="inn">ИНН</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="kpp"
                        v-model="kpp"
                        :class="{ 'error-valid': $v.kpp.$error }"
                        required
                      />
                      <label for="kpp">КПП</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="bik"
                        v-model="bik"
                        :class="{ 'error-valid': $v.bik.$error }"
                        required
                      />
                      <label for="bik">БИК</label>
                    </div>
                    <div class="order-form__surname">
                      <input
                        type="text"
                        id="scope"
                        v-model="scope"
                        :class="{ 'error-valid': $v.scope.$error }"
                        required
                      />
                      <label for="scope">Расчёсный счет</label>
                    </div>
                  </div>
                  <div class="order-form__button">
                    <input
                      type="button"
                      value="Продолжить"
                      data-tab="block"
                      @click="
                        validEntity(
                          name,
                          email,
                          phone,
                          company,
                          address,
                          inn,
                          kpp,
                          bik,
                          scope
                        )
                      "
                      :class="{
                        btnotactive:
                          ($v.phone.$dirty && $v.phone.$error) ||
                          ($v.email.$dirty && $v.email.$error) ||
                          ($v.name.$dirty && $v.name.$error) ||
                          ($v.company.$dirty && $v.company.$error) ||
                          ($v.address.$dirty && $v.address.$error) ||
                          ($v.inn.$dirty && $v.inn.$error) ||
                          ($v.bik.$dirty && $v.bik.$error) ||
                          ($v.kpp.$dirty && $v.kpp.$error) ||
                          ($v.scope.$dirty && $v.scope.$error),
                      }"
                      :disabled="
                        ($v.phone.$dirty && $v.phone.$error) ||
                        ($v.email.$dirty && $v.email.$error) ||
                        ($v.name.$dirty && $v.name.$error) ||
                        ($v.company.$dirty && $v.company.$error) ||
                        ($v.address.$dirty && $v.address.$error) ||
                        ($v.inn.$dirty && $v.inn.$error) ||
                        ($v.bik.$dirty && $v.bik.$error) ||
                        ($v.kpp.$dirty && $v.kpp.$error) ||
                        ($v.scope.$dirty && $v.scope.$error)
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="order-strip"></div>
            </div>
            <div
              class="order__title2"
              data-tab="block"
              :class="{
                svgnotactive:
                  (name.length && email.length && phone.length) === 0,
              }"
              id="titletwo"
              @click="switchTabsClassSvg('block')"
            >
              <svg
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M124.586 63L62.9998 1.41415L1.41406 63L62.9998 124.586L124.586 63ZM63.707 0.707062C63.3164 0.316559 62.6833 0.316559 62.2927 0.707062L0.706957 62.2929C0.316431 62.6834 0.316431 63.3166 0.706957 63.7071L62.2927 125.293C62.6833 125.683 63.3164 125.683 63.707 125.293L125.293 63.7071C125.683 63.3166 125.683 62.6834 125.293 62.2929L63.707 0.707062ZM82.1103 59.3498H81.4807V57.4598V50.7411C81.4807 48.5414 79.6911 46.7517 77.4915 46.7517H60.1925L48.5218 43.4173L48.5174 43.4162L48.5116 43.4149L48.5078 43.4137L48.5015 43.4118C48.4944 43.41 48.4875 43.4092 48.4805 43.4077L48.4751 43.4066C48.4661 43.4046 48.457 43.4027 48.448 43.4013C48.4382 43.3997 48.4285 43.3987 48.4187 43.3975L48.405 43.396C48.3982 43.3953 48.3914 43.3947 48.3846 43.3943C48.3774 43.394 48.3702 43.3938 48.3631 43.3937L48.357 43.3936C48.3452 43.3934 48.3335 43.3933 48.3218 43.3938C48.3153 43.3941 48.3087 43.3946 48.3022 43.3951L48.296 43.3957L48.2776 43.3974C48.2717 43.398 48.2659 43.3987 48.2601 43.3995L48.2487 43.4014L48.2361 43.4037C48.2238 43.4059 48.2117 43.4082 48.1997 43.4111C48.193 43.4128 48.1864 43.4147 48.1798 43.4166L48.1776 43.4171C48.1653 43.4207 48.1532 43.4243 48.1411 43.4285C48.1343 43.4309 48.1276 43.4336 48.1208 43.4362C48.1086 43.4409 48.0965 43.4459 48.0847 43.4513L48.0734 43.4569L48.066 43.4606C48.0542 43.4666 48.0425 43.4726 48.0311 43.4794L48.0265 43.4821L48.0135 43.4903C48.0023 43.4973 47.9912 43.5045 47.9805 43.5123L47.9712 43.5193L47.9638 43.525C47.9574 43.53 47.951 43.535 47.9447 43.5402L47.9334 43.5498C47.9279 43.5547 47.9226 43.5598 47.9172 43.5648C47.908 43.5736 47.8988 43.5823 47.8901 43.5915C47.8859 43.5959 47.882 43.6005 47.878 43.6051L47.8742 43.6094C47.8662 43.6186 47.8583 43.6278 47.8509 43.6375C47.8455 43.6444 47.8404 43.6516 47.8353 43.6587C47.8287 43.6681 47.8221 43.6775 47.8161 43.6871C47.8109 43.6953 47.8061 43.7039 47.8013 43.7124C47.796 43.7217 47.7907 43.7311 47.7859 43.7408C47.7834 43.7458 47.7811 43.7508 47.7788 43.7559L47.7728 43.7695C47.7686 43.779 47.7644 43.7885 47.7607 43.7982C47.7572 43.8076 47.7541 43.8172 47.7509 43.827L47.7501 43.8296C47.7479 43.8363 47.7452 43.8427 47.7432 43.8496L47.7421 43.854L47.7408 43.8598L47.7394 43.8643L47.7391 43.8653L47.7377 43.8699L47.0175 46.7516H44.9895C42.7943 46.7516 41.0077 48.534 41.0005 50.7277L41.0002 50.7339C41 50.7362 40.9998 50.7386 40.9998 50.7409V71.9929V72V72.5768L40.9999 72.5827L41.0001 77.617C41.0001 77.621 41.0004 77.6249 41.0007 77.6288L41.0011 77.6364C41.0116 79.8272 42.7967 81.6065 44.9899 81.6065H77.4917C79.6912 81.6065 81.4807 79.8172 81.481 77.6177V73.2072H82.1105C83.1523 73.2072 83.9998 72.3596 83.9998 71.3179V61.2391C83.9996 60.1974 83.152 59.3498 82.1103 59.3498ZM42.2596 72.5768V72.4078V53.6462C42.9738 54.3177 43.9341 54.7304 44.9895 54.7304H77.4915L77.4937 54.7304C78.9977 54.7315 80.221 55.9555 80.221 57.4599V61.8694H73.2913L73.2901 61.8695C73.2719 61.8695 73.2537 61.8706 73.2357 61.8722C73.2255 61.8731 73.2154 61.8742 73.2053 61.8756C73.1956 61.877 73.1859 61.8786 73.1763 61.8804L73.1719 61.881L73.1676 61.8817C73.1511 61.885 73.135 61.8894 73.1189 61.894C73.1154 61.8949 73.1118 61.8956 73.1084 61.8967C73.0941 61.9011 73.0802 61.9063 73.0664 61.9116L73.0599 61.914C73.0567 61.9151 73.0536 61.9162 73.0504 61.9174L73.0376 61.9231L73.0209 61.9311L73.0165 61.9333L73.0093 61.9367C73.0043 61.939 72.9993 61.9414 72.9944 61.9439C72.9857 61.9485 72.9774 61.9538 72.969 61.9589C72.9597 61.9644 72.9502 61.9698 72.9411 61.9759C72.935 61.9799 72.9294 61.9845 72.9235 61.9887C72.9128 61.9965 72.9019 62.0041 72.8917 62.0126L72.8867 62.0169L72.8788 62.0242C72.8678 62.0338 72.8568 62.0432 72.8464 62.0537C72.8424 62.0577 72.8386 62.062 72.8349 62.0662L72.829 62.0729L72.8229 62.0795C72.8187 62.084 72.8145 62.0884 72.8104 62.0931L72.8047 62.0998C72.796 62.1104 72.7876 62.1213 72.7796 62.1325L72.7727 62.1424L72.7681 62.1492L72.7674 62.1501L69.4082 67.1892C69.3848 67.2243 69.3649 67.2616 69.3492 67.3003C69.3433 67.3147 69.3385 67.3294 69.3337 67.344L69.3315 67.3501C69.3307 67.3524 69.3298 67.3548 69.3291 67.3572C69.3273 67.3633 69.3256 67.3693 69.324 67.3753C69.3216 67.3849 69.3194 67.3945 69.3173 67.4041C69.3164 67.4082 69.3152 67.4122 69.3144 67.4164C69.3129 67.4239 69.3117 67.4315 69.3106 67.4392L69.308 67.4588C69.3072 67.4649 69.3061 67.4709 69.3055 67.4771L69.3047 67.4862L69.3044 67.4913L69.3036 67.512L69.3032 67.5204C69.3028 67.5265 69.3024 67.5326 69.3024 67.5388L69.3026 67.5467L69.3031 67.5555L69.3035 67.5647C69.304 67.5766 69.3043 67.5887 69.3055 67.6006L69.3058 67.6032C69.3064 67.6081 69.3073 67.6131 69.3079 67.618C69.3098 67.6324 69.3116 67.6469 69.3145 67.6612L69.3161 67.6684L69.3173 67.673C69.3208 67.6888 69.3244 67.7046 69.3291 67.7202L69.3315 67.7271L69.3338 67.7336C69.3386 67.7481 69.3434 67.7628 69.3493 67.7773C69.3575 67.7973 69.3668 67.817 69.3771 67.8362C69.3866 67.854 69.3971 67.8715 69.4084 67.8884L72.7675 72.9268C72.7811 72.9469 72.7964 72.9667 72.812 72.9851C72.8171 72.9911 72.8226 72.9967 72.8279 73.0025C72.8361 73.0115 72.8447 73.0203 72.8535 73.0288L72.8611 73.0362C72.8679 73.0426 72.8746 73.0488 72.8815 73.0548C72.8938 73.0653 72.9065 73.0751 72.9195 73.0847C72.9254 73.089 72.931 73.0937 72.937 73.0977C72.9558 73.1106 72.9754 73.1224 72.9957 73.1331C73.0008 73.1358 73.0061 73.1381 73.0112 73.1406C73.0273 73.1487 73.0438 73.1562 73.0607 73.1628C73.0672 73.1654 73.0738 73.1678 73.0804 73.1701C73.0964 73.1758 73.1127 73.1808 73.1294 73.1853L73.1498 73.1906C73.1578 73.1924 73.1658 73.1941 73.1739 73.1955C73.1831 73.1972 73.1923 73.1987 73.2017 73.2L73.2087 73.2012C73.2127 73.2019 73.2167 73.2025 73.2207 73.203C73.2343 73.2046 73.248 73.2057 73.2618 73.2063C73.2701 73.2067 73.2784 73.2069 73.2867 73.2069L73.2921 73.2073L73.2933 73.2072H80.2212V77.617C80.2212 79.1222 78.9967 80.3467 77.4917 80.3467H44.9899C43.4849 80.3467 42.2604 79.1222 42.2604 77.617L42.2601 77.6115L42.2599 77.6073L42.2596 72.5768ZM48.802 44.8075L59.9164 47.9831L59.918 47.9836L67.367 50.1119H47.4762L48.802 44.8075ZM80.2209 54.5545C79.5068 53.8831 78.5467 53.4705 77.4915 53.4705L77.4882 53.4707H44.9895C43.4844 53.4707 42.26 52.2462 42.26 50.7411C42.26 49.236 43.4844 48.0115 44.9895 48.0115H46.7026L46.1777 50.1119H44.9897C44.6418 50.1119 44.3598 50.3939 44.3598 50.7418C44.3598 51.0896 44.6418 51.3717 44.9897 51.3717H46.6674L46.67 51.3718L46.672 51.3717H71.8623L71.8646 51.3718L71.8667 51.3717H76.6509C76.9988 51.3717 77.2808 51.0896 77.2808 50.7418C77.2808 50.3939 76.9988 50.1119 76.6509 50.1119H71.9526L64.6015 48.0115H77.4914C78.9964 48.0115 80.2209 49.236 80.2209 50.7411V54.5545ZM82.7398 71.3175C82.7398 71.6646 82.4574 71.9471 82.1103 71.9471H73.6284L70.689 67.5384L73.6284 63.1291H82.1103C82.1191 63.1291 82.1277 63.1281 82.1364 63.1278C82.3477 63.1248 82.5506 63.0872 82.7398 63.0202V71.3175ZM82.1103 61.8687C82.1078 61.8687 82.1054 61.8689 82.103 61.869L82.0973 61.8694H81.4807V60.6096H82.1103C82.4574 60.6096 82.7398 60.892 82.7398 61.2391C82.7398 61.5862 82.4574 61.8687 82.1103 61.8687ZM73.5023 67.5385C73.5023 66.2649 74.5383 65.2288 75.8118 65.2288C77.0854 65.2288 78.1214 66.2649 78.1214 67.5385C78.1214 68.812 77.0854 69.8481 75.8118 69.8481C74.5383 69.8481 73.5023 68.812 73.5023 67.5385ZM74.762 67.5385C74.762 68.1174 75.2329 68.5883 75.8118 68.5883C76.3907 68.5883 76.8617 68.1174 76.8617 67.5385C76.8617 66.9596 76.3907 66.4886 75.8118 66.4886C75.2329 66.4886 74.762 66.9596 74.762 67.5385Z"
                  fill="#3967d6"
                />
              </svg>

              <h1>Варианты получения</h1>
            </div>
            <div class="order-wrap">
              <div
                class="order-post"
                :class="{ isPostActive: isPostActive }"
                data-tab="post"
                v-if="isPostActive"
              >
                <div class="order-post__btn">
                  <div class="order-post__radio">
                    <label
                      ><input
                        type="radio"
                        name="Sex"
                        value="pickup"
                        v-model="post"
                      />
                      Самовывоз – бесплатно</label
                    >
                    <p>Со склада г. Новосибирск, ул. Бетонная 6</p>
                  </div>
                  <div class="order-post__radio">
                    <label
                      ><input
                        type="radio"
                        name="Sex"
                        value="delivery"
                        v-model="post"
                      />
                      Доставка – рассчитывается менеджером</label
                    >
                  </div>
                </div>

                <div class="order-post__first" v-bind:class="classObject">
                  <span
                    v-if="
                      ($v.country.$dirty ||
                        $v.city.$dirty ||
                        $v.addresspost.$dirty) &&
                      (country.length && city.length && addresspost.length) ===
                        0
                    "
                    class="span-error"
                  >
                    Пожалуйста, заполните все поля
                  </span>

                  <span
                    v-else-if="
                      $v.country.$error ||
                      $v.city.$error ||
                      $v.addresspost.$error
                    "
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span>
                  <!-- <span
                    v-if="
                      $v.country.$error ||
                      $v.city.$error ||
                      $v.addresspost.$error
                    "
                    class="span-error"
                  >
                    Данные введены некорректно
                  </span> -->
                  <div class="order-form__name">
                    <input
                      type="text"
                      id="country"
                      v-model="country"
                      :class="{ 'error-valid': $v.country.$error }"
                      required
                    />
                    <label for="country">Страна</label>
                  </div>
                  <div class="order-form__surname">
                    <input
                      type="text"
                      id="city"
                      v-model="city"
                      :class="{ 'error-valid': $v.city.$error }"
                      required
                    />
                    <label for="city">Город</label>
                  </div>
                  <div class="order-form__phone">
                    <input
                      type="text"
                      id="addresspost"
                      v-model="addresspost"
                      :class="{ 'error-valid': $v.addresspost.$error }"
                      required
                    />
                    <label for="addresspost">Адрес</label>
                  </div>
                </div>
                <div class="order-post__comment">
                  <p>Комментарии к заказу:</p>
                  <textarea cols="30" rows="5" v-model="comment"></textarea>
                </div>
                <div class="order-post__button">
                  <input
                    type="button"
                    value="Продолжить"
                    data-tab="post"
                    @click="validPost()"
                    :disabled="
                      !answerSelected ||
                      (!selectedPick &&
                        (country.length &&
                          city.length &&
                          addresspost.length) === 0) ||
                      ($v.country.$dirty && $v.country.$error) ||
                      ($v.city.$dirty && $v.city.$error) ||
                      ($v.addresspost.$dirty && $v.addresspost.$error)
                    "
                    :class="{
                      btnotactive:
                        !answerSelected ||
                        (!selectedPick &&
                          (country.length &&
                            city.length &&
                            addresspost.length) === 0) ||
                        ($v.country.$dirty && $v.country.$error) ||
                        ($v.city.$dirty && $v.city.$error) ||
                        ($v.addresspost.$dirty && $v.addresspost.$error),
                    }"
                  />
                </div>
              </div>

              <div class="order-strip"></div>
            </div>
            <div
              class="order__title3"
              data-tab="post"
              id="titlethee"
              :class="{
                svgnotactive:
                  !answerSelected ||
                  (!selectedPick &&
                    (country.length && city.length && addresspost.length) ===
                      0),
              }"
              @click="switchTabsClassSvg('post')"
            >
              <svg
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M62.9998 1.41415L124.586 63L62.9998 124.586L1.41406 63L62.9998 1.41415ZM62.2927 0.707062C62.6833 0.316559 63.3164 0.316559 63.707 0.707062L125.293 62.2929C125.683 62.6834 125.683 63.3166 125.293 63.7071L63.707 125.293C63.3164 125.683 62.6833 125.683 62.2927 125.293L0.706957 63.7071C0.316431 63.3166 0.316431 62.6834 0.706957 62.2929L62.2927 0.707062ZM49.035 74.75C49.035 73.3891 50.1384 72.2857 51.4993 72.2857C52.8597 72.2872 53.962 73.3897 53.9636 74.75C53.9636 76.1111 52.8603 77.2143 51.4993 77.2143C50.1382 77.2143 49.035 76.1109 49.035 74.75ZM50.6779 74.75C50.6779 75.2037 51.0456 75.5714 51.4993 75.5714C51.9528 75.571 52.3202 75.2035 52.3207 74.75C52.3207 74.2964 51.953 73.9286 51.4993 73.9286C51.0456 73.9286 50.6779 74.2964 50.6779 74.75ZM77.7864 72.2857C76.4255 72.2857 75.3221 73.3891 75.3221 74.75C75.3221 76.1109 76.4255 77.2143 77.7864 77.2143C79.1473 77.2143 80.2507 76.1111 80.2507 74.75C80.2492 73.3897 79.1468 72.2872 77.7864 72.2857ZM77.7864 75.5714C77.3327 75.5714 76.965 75.2037 76.965 74.75C76.965 74.2964 77.3328 73.9286 77.7864 73.9286C78.2401 73.9286 78.6078 74.2964 78.6078 74.75C78.6074 75.2035 78.2399 75.571 77.7864 75.5714ZM83.0009 54.2207L88.6595 60.5932C89.0621 61.0439 89.285 61.6268 89.2856 62.2312V73.1072C89.2841 74.4676 88.1816 75.57 86.8213 75.5715H83.4701C83.0652 78.3996 80.6427 80.5001 77.7857 80.5001C74.9287 80.5001 72.5062 78.3996 72.1013 75.5715H57.1843C56.7794 78.3996 54.3569 80.5001 51.4999 80.5001C48.6429 80.5001 46.2203 78.3996 45.8155 75.5715H44.107C42.7467 75.57 41.6442 74.4676 41.6427 73.1072V70.6429H40.8213C40.6034 70.6429 40.3944 70.5564 40.2404 70.4024C40.0863 70.2483 39.9998 70.0393 39.9998 69.8214V48.4643C40.0013 47.1039 41.1038 46.0014 42.4641 46H71.2142C72.5745 46.0014 73.677 47.1039 73.6784 48.4643V53.3929H81.1535C81.8595 53.3914 82.5322 53.6928 83.0009 54.2207ZM41.6427 48.4643V68.9999H72.0356V48.4643C72.0352 48.0108 71.6677 47.6433 71.2142 47.6429H42.4641C42.0107 47.6432 41.6432 48.0108 41.6427 48.4643ZM44.107 73.9285H45.8155C45.9949 72.6796 46.5812 71.5247 47.4836 70.6429H43.2856V73.1071C43.286 73.5606 43.6535 73.928 44.107 73.9285ZM47.3927 74.7499C47.3927 77.0182 49.2316 78.8571 51.4999 78.8571C53.767 78.8545 55.6044 77.0171 55.6071 74.75C55.6071 72.4817 53.7682 70.6429 51.4999 70.6429C49.2316 70.6429 47.3927 72.4816 47.3927 74.7499ZM57.1842 73.9285H59.7141V70.6429H55.5162C56.4185 71.5247 57.0048 72.6796 57.1842 73.9285ZM61.357 73.9285H67.107V70.6429H61.357V73.9285ZM68.7499 73.9285H72.1012C72.2806 72.6796 72.8669 71.5247 73.7692 70.6429H68.7499V73.9285ZM73.6783 74.7499C73.6783 77.0182 75.5172 78.8571 77.7855 78.8571C80.0528 78.8545 81.89 77.0171 81.8927 74.7499C81.8927 72.4816 80.0538 70.6427 77.7855 70.6427C75.5171 70.6427 73.6783 72.4816 73.6783 74.7499ZM86.8213 73.9285C87.2748 73.9281 87.6422 73.5606 87.6427 73.1071V65.7143H79.4284C78.0681 65.7128 76.9656 64.6103 76.9641 63.25V55.0357H73.6783V68.9999H77.7855C80.6407 69.005 83.0603 71.1029 83.4699 73.9285H86.8213ZM79.4284 64.0714H87.6427L87.6428 62.2312C87.6418 62.0294 87.5669 61.8351 87.4321 61.685L81.7716 55.3101C81.6144 55.1343 81.3893 55.0344 81.1535 55.0357H78.607V63.25C78.6074 63.7035 78.9749 64.0709 79.4284 64.0714Z"
                  fill="#3967d6"
                />
              </svg>

              <h1>Способы оплаты</h1>
            </div>
            <div class="order-wrap2">
              <div
                class="order-pay"
                data-tab="pay"
                :class="{ isPayActive: isPayActive }"
                v-if="isPayActive"
              >
                <div class="pay__radio">
                  <label
                    ><input
                      type="radio"
                      name="pay"
                      value="cash"
                      v-model="pay"
                    />
                    Наличными при получении
                  </label>
                </div>
                <div class="pay__radio">
                  <label>
                    <strike style="color: black">
                      <input
                        type="radio"
                        name="pay"
                        value="cart"
                        v-model="pay"
                        disabled
                      />
                      Банковской картой
                    </strike>
                  </label>

                  <p class="span-error2">Временно недоступно</p>

                  <div class="order-pay__icon">
                    <div class="icon-visa">
                      <img src="../assets/image/icon/visa.png" alt="" />
                    </div>
                    <div class="icon-mastercard">
                      <img src="../assets/image/icon/mastercard.png" alt="" />
                    </div>
                    <div class="icon-mir">
                      <img src="../assets/image/icon/mir.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-strip"></div>
            </div>
          </div>
          <div class="order__column">
            <div class="order-result">
              <CartOrder
                v-if="$store.state.cart.length"
                :cart_data="CART"
                v-show="show"
              />
            </div>
          </div>
        </div>
        <router-link to="/order/ready">
          <button
            class="order-cart__btn"
            :disabled="!paySelected"
            :class="{
              btnotactiveorder: !paySelected,
            }"
            @click="postPost()"
          >
            Оформить заказ
          </button>
        </router-link>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
// Импорт компонентов
import CartOrder from "@/components/cart/cartfororder";
import { mapActions, mapGetters } from "vuex";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "order",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // props: {
  //     cart_item_data: {
  //         type: Array,
  //         default () {
  //             return []
  //         }
  //     }
  // },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      inn: "",
      kpp: "",
      bik: "",
      scope: "",
      country: "",
      city: "",
      comment: "",
      addresspost: "",
      post: "",
      pay: "",

      isBlockActive: true,
      isPostActive: false,
      isPayActive: false,

      isIndivActive: true,
      isEntityActive: false,
      isButtonDisabled: false,
      show: true,
    };
  },
  components: {
    // Cart
    CartOrder,
  },
  validations: {
    email: {
      required,
      email,
      // validFormat: (val) =>
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
      //     val
      //   ),
    },

    name: {
      required,
      maxLength: maxLength(30),
      alpha: (val) => /^[а-яё]|([а-яё]+(?: |, |-)+[а-яё])$/i.test(val),
    },

    company: {
      required,
      maxLength: maxLength(40),
      alphanamecompany: (val) => /^[а-яё]*$/i.test(val),
    },
    address: {
      required,
      alphanameaddres: (val) => /^([А-Яа-яЁё\s])+([ 0-9])*$/i.test(val),
    },
    phone: {
      required,
      minLength: minLength(15),
    },

    bik: {
      validbik: (val) => /^[0-9]{9}$/i.test(val),
    },
    inn: {
      validinn: (val) => /^([0-9]{10}|[0-9]{12})$/i.test(val),
    },
    kpp: {
      validkpp: (val) => /^([0-9]{10}|[0-9]{12})$/i.test(val),
    },

    scope: {
      validcheck: (val) => /^(?:[. ]*\d){20}$/i.test(val),
    },
    country: {
      required,
      maxLength: maxLength(40),
      alphanamecountry: (val) => /^[а-яё]*$/i.test(val),
    },
    city: {
      required,
      maxLength: maxLength(40),
      alphanamecity: (val) => /^[а-яё]|([а-яё]+(?: |, |-)+[а-яё])$/i.test(val),
    },
    addresspost: {
      required,
      maxLength: maxLength(40),
      alphaaddresspost: (val) => /^([А-Яа-яЁё\s])+([ 0-9])*$/i.test(val),
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    answerSelected() {
      return this.post.length;
    },
    paySelected() {
      return this.pay.length;
    },
    selectedPick() {
      return this.post === "pickup";
    },

    classObject: function () {
      return {
        activenone: this.post === "pickup",
      };
    },
    cartTotalCost() {
      let result = [];
      for (let item of this.CART) {
        result.push(item.price * item.quantity);
      }
      result = result.reduce(function (sum, el) {
        return sum + el;
      });
      return result;
    },
  },

  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    ...mapActions(["DELETEALL_FROM_CART"]),
    validIndiv() {
      this.$v.name.$touch();
      this.$v.phone.$touch();
      this.$v.email.$touch();

      if (
        this.$v.$invalid &&
        (this.$v.name.$error || this.$v.phone.$error || this.$v.email.$error)
      ) {
        console.log("Ошибка", this.$v.$invalid);
        console.log("проверка");
      } else {
        this.switchTabsClass("block");
      }
    },
    validEntity() {
      this.$v.name.$touch();
      this.$v.phone.$touch();
      this.$v.email.$touch();
      this.$v.company.$touch();
      this.$v.address.$touch();
      this.$v.inn.$touch();
      this.$v.kpp.$touch();
      this.$v.bik.$touch();
      this.$v.scope.$touch();
      if (
        this.$v.$invalid &&
        (this.$v.name.$error ||
          this.$v.phone.$error ||
          this.$v.email.$error ||
          this.$v.address.$error ||
          this.$v.company.$error ||
          this.$v.inn.$error ||
          this.$v.bik.$error ||
          this.$v.kpp.$error ||
          this.$v.scope.$error)
      ) {
        console.log("проверка");
      } else {
        this.switchTabsClass("block");
      }
    },

    validPost() {
      if (this.country.length && this.city.length && this.addresspost.length) {
        this.$v.country.$touch();
        this.$v.city.$touch();
        this.$v.addresspost.$touch();
        if (
          (this.$v.$invalid && !this.answerSelected) ||
          this.$v.country.$error ||
          this.$v.city.$error ||
          this.$v.addresspost.$error
        ) {
          console.log("проверка");
        } else {
          this.switchTabsClass("post");
        }
      } else {
        this.switchTabsClass("post");
      }
    },
    //   // if (this.$v.$invalid && !this.answerSelected) {
    //   //   console.log("проверка");
    //   // } else {
    //   //   this.switchTabsClass("post");
    //   // }

    postPost() {
      console.log(this.CART, this.cartTotalCost);
      // if (
      //   (this.company.length &&
      //     this.address.length &&
      //     this.inn.length &&
      //     this.kpp.length &&
      //     this.bik.length &&
      //     this.scope.length) === 0
      // ) {
      //   try {
      //     let data = axios.post("https://cb0e897ca6ee.ngrok.io/api/orders", {
      //       name: this.name,
      //       email: this.email,
      //       phone: this.phone,
      //       country: this.country,
      //       city: this.city,
      //       addresspost: this.addresspost,
      //       post: this.post,
      //       pay: this.pay,
      //       country: this.country,
      //       product: this.BEFORECART,
      //       price: this.cartTotalCost,
      //     });
      //     if (data.status == "success") {
      //       console.log("Data deliveried");
      //     } else {
      //       throw new Error(data.status);
      //     }
      //   } catch (e) {
      //     this.error = e;
      //   }
      // } else {
      try {
        let data = axios.post("https://a863bbb770d2.ngrok.io/api/orders", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          company: this.company,
          address: this.address,
          inn: this.inn,
          kpp: this.kpp,
          bik: this.bik,
          scope: this.scope,
          country: this.country,
          city: this.city,
          addresspost: this.addresspost,
          post: this.post,
          pay: this.pay,
          product: this.CART,
          price: this.cartTotalCost,
        });
        console.log(data);
        this.DELETEALL_FROM_CART();
        if (data.status == "success") {
          console.log("Data deliveried");
        } else {
          throw new Error(data.status);
        }
      } catch (e) {
        this.error = e;
      }
    },
    // postPost(
    //   name,
    //   email,
    //   phone,
    //   company,
    //   address,
    //   inn,
    //   kpp,
    //   bik,
    //   scope,
    //   country,
    //   city,
    //   comment,
    //   addresspost,
    //   post,
    //   pay,
    //   CART,
    //   cartTotalCost
    // ) {
    //   console.log(name);
    //   console.log(CART, cartTotalCost);
    //   if (
    //     (company.length &&
    //       address.length &&
    //       inn.length &&
    //       kpp.length &&
    //       bik.length &&
    //       scope.length) === 0
    //   ) {
    //     try {
    //       let data = axios.post("https://e430fbd60ad0.ngrok.io/api/orders", {
    //         name: name,
    //         email: email,
    //         phone: phone,
    //         country: country,
    //         city: city,
    //         addresspost: addresspost,
    //         post: post,
    //         pay: pay,
    //         product: CART,
    //         price: cartTotalCost,
    //       });
    //       if (data.status == "success") {
    //         console.log("Data deliveried");
    //       } else {
    //         throw new Error(data.status);
    //       }
    //     } catch (e) {
    //       this.error = e;
    //     }
    //   } else {
    //     try {
    //       let data = axios.post("https://e430fbd60ad0.ngrok.io/api/orders", {
    //         name: name,
    //         email: email,
    //         phone: phone,
    //         company: company,
    //         address: address,
    //         inn: inn,
    //         kpp: kpp,
    //         bik: bik,
    //         scope: scope,
    //         country: country,
    //         city: city,
    //         addresspost: addresspost,
    //         post: post,
    //         pay: pay,
    //         product: CART,
    //         price: cartTotalCost,
    //       });
    //       if (data.status == "success") {
    //         console.log("Data deliveried");
    //       } else {
    //         throw new Error(data.status);
    //       }
    //     } catch (e) {
    //       this.error = e;
    //     }
    //   }
    // },
    switchTabs(tab) {
      if (tab === "individual") {
        this.isIndivActive = true;
        this.isEntityActive = false;
      } else {
        this.isIndivActive = false;
        this.isEntityActive = true;
      }
    },
    switchTabsClass(tab) {
      if (tab === "block") {
        this.isBlockActive = false;
        this.isPostActive = true;
        this.isPayActive = false;
      } else if (tab === "post") {
        this.isBlockActive = false;
        this.isPostActive = false;
        this.isPayActive = true;
      } else {
        this.isBlockActive = true;
        this.isPostActive = false;
        this.isPayActive = false;
      }
    },
    switchTabsClassSvg(tab) {
      let titletwo = document.getElementById("titletwo");
      let titlethee = document.getElementById("titlethee");

      if (
        tab === "block" &&
        !titletwo.classList.contains("svgnotactive") &&
        titletwo.classList.contains("order__title2")
      ) {
        this.isBlockActive = false;
        this.isPostActive = true;
        this.isPayActive = false;
      } else if (
        tab === "post" &&
        !titlethee.classList.contains("svgnotactive") &&
        titlethee.classList.contains("order__title3")
      ) {
        this.isBlockActive = false;
        this.isPostActive = false;
        this.isPayActive = true;
      } else {
        this.isBlockActive = true;
        this.isPostActive = false;
        this.isPayActive = false;
      }
    },

    DeleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>