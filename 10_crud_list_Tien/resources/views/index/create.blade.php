<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('/css/styleCreate.css') }}">

    {{-- <link rel="stylesheet" href="{{ asset('/css/createValidator.css') }}"> --}}

    <link rel="stylesheet" href="{{ asset('/css/chosen/chosen.min.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link
        rel="stylesheet"href="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/css/multi-select-tag.css">

    <script src="https://code.jquery.com/jquery-latest.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/3d01baf2d7.js" crossorigin="anonymous"></script>

    <script src="{{ asset('/js/index.js') }}"></script>
    <script src="{{ asset('/js/country.js') }}"></script>

    <title>Document</title>
</head>

<body>
    <div class="content" style="text-align: center;">
        <h3>新規登録/編集画面</h3>
    </div>
    <br>
    <form action=" {{ route('student.store') }}" method="POST">
        @csrf
        <div class="form-group" style="position: relative;">
            <label for="name">氏名<span style="color: red">（＊必須）</span></label>
            <input type="text" name="name" autocomplete="of" onblur="myFunctionName()" onfocus="focusName()"
                placeholder="" id="name" value="{{ old('name') }}" class="form-control">

            <div id="nameError" style="position: absolute; top: 42px;left:570px"></div>
            <div id="nameErrorText" style="position: absolute;color: red;"></div>
            @error('name')
                <span id="mes" style="position: absolute; color: red; font-size: 15px; ">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group"style="position: relative;">
            <label for="name_kana">氏名 (カタカナ)</label>
            <input type="text" name="name_kana" autocomplete="off" onblur="myFunctionName_kana()"
                onfocus="focusName_kana()" placeholder="カタカナで入力してください。。" id="name_kana" value="{{ old('name_kana') }}"
                class="form-control">
            <div id="name_kanaError" style="position: absolute; top: 42px;left:570px"></div>
            <small id="name_ErrorText" style="position: absolute;color: red;"></small>


            @if ($errors->has('name_kana'))
                <span id="mes" style="color: red; font-size: 15px;">{{ $errors->first('name_kana') }}</span>
            @endif
        </div>
        <br>
        <div class="form-control">
            <label for="sex">性別</label><br>
            <input type="radio" name="sex" id="option1" value="1" class="" id="sex"
                {{ old('sex') === 1 ? 'checked' : '' }}>
            <label for="option1">
                男
            </label>
            <input type="radio" name="sex" id="option2" value="2" {{ old('sex') === 2 ? 'checked' : '' }}>
            <label for="option2">
                女
            </label>
            <input type="radio" name="sex" id="option3" value="0" {{ old('sex') === 0 ? 'checked' : '' }}>
            <label for="option3">
                不明
            </label><br>
            @error('sex')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group">
            <label for="birthday">生年月日</label>
            <input type="date" name="birthday" id="birthday" value="{{ old('birthday') }}"><br>
            @error('birthday')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div><br>
        <div class="form-group">
            <label for="age">年齢</label>
            <input type="number" name="age" autocomplete="off" id="age" class="form-control"
                value="{{ old('age') }}">
            @error('age')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group">
            <label for="country">出身国</label><br>
            <select name="country" id="country" class="form-control" style="width:104%; height:40px;">
                <!-- Các option khác -->
                {{-- <option value=""{{ old('country') == '' ? 'selected' : '' }}></option>
                <option value="日本" {{ old('country') == '日本' ? 'selected' : '' }}>日本</option>
                <option value="日本" {{ old('country') == '日本' ? 'selected' : '' }}>日本</option>
                <option value="アメリカ" {{ old('country') == 'アメリカ' ? 'selected' : '' }}>アメリカ</option>
                <option value="ロシア" {{ old('country') == 'ロシア' ? 'selected' : '' }}>ロシア</option>
                <option value="ウズベキスタン" {{ old('country') == 'ウズベキスタン' ? 'selected' : '' }}>ウズベキスタン</option>
                <option value="バングラデシュ" {{ old('country') == 'バングラデシュ' ? 'selected' : '' }}>バングラデシュ</option>
                <option value="ベトナム" {{ old('country') == 'ベトナム' ? 'selected' : '' }}>ベトナム</option>
                <option value="イギリス" {{ old('country') == 'イギリス' ? 'selected' : '' }}>イギリス</option>
                <option value="フランス" {{ old('country') == 'フランス' ? 'selected' : '' }}>フランス</option>
                <option value="ドイツ" {{ old('country') == 'ドイツ' ? 'selected' : '' }}>ドイツ</option> --}}

            </select>
            @if ($errors->has('country'))
                <span style="color: red; font-size: 15px;">{{ $errors->first('country') }}</span>
            @endif
        </div>
        <div>
            {{-- <div id="addCountryForm"> --}}
            <div id="addCountry"></div>
            <div id="message"></div>
            <button type="button" class="addCountry btn btn-primary">Add New Country</button>
            {{-- </div> --}}
        </div>

        <br>
        <br>
        <div class="form-control">
            <h4 style="text-align: center;">一次面接</h4>
            <div class="form-group">
                <label for="date">実施日</label>
                <input type="date" name="first_interv_date" id="date" max="{{ date('Y-m-d') }}"
                    value="{{ old('first_interv_date') }}">
                @error('first_interv_date')
                    <span style="color: red; font-size: 15px;">{{ $message }}</span>
                @enderror
            </div>
            <br>
            <div class="form-group">
                <label for="first_interv_staff">一次面接の対応者名</label>
                <select name="first_interv_staff" id="sec_interv_staff" style="width:101%; height:40px;">
                    <option value="" {{ old('sec_interv_staff') == '' ? 'selected' : '' }}
                        style="text-align: center;"></option>
                    <option value="西田" {{ old('sec_interv_staff') == '西田' ? 'selected' : '' }}
                        style="text-align: center;">西田</option>
                    <option value="新島" {{ old('sec_interv_staff') == '新島' ? 'selected' : '' }}
                        style="text-align: center;">新島</option>
                </select>
                @error('first_interv_staff')
                    <span style="color: red; font-size: 15px;">{{ $message }}</span>
                @enderror
            </div>
            <div class="form-group">
                <strong>合否</strong><br>
                <input type="radio" name="first_interv_result" id="option111" value="1"
                    {{ old('first_interv_result') == 1 ? 'checked' : '' }}>
                <label for="option111">
                    合格
                </label><br>
                <input type="radio" name="first_interv_result" id="option222" value="2"
                    {{ old('first_interv_result') == 2 ? 'checked' : '' }}>
                <label for="option222">
                    不合格
                </label>
                <br>
                <input type="radio" name="first_interv_result" id="option333" value="0" class=""
                    id="first_interv_result" {{ old('sex') === 0 ? 'checked' : '' }}>
                <label for="option333">
                    未定
                </label>
                <br>
            </div>
        </div>
        <h4 style="text-align: center;"> 二次面接</h4>
        <br>
        <div class="form-froup">
            <label for="">実施日</label>
            <input type="date" name="sec_interv_date" id="date" max="{{ date('Y-m-d') }}"
                value="{{ old('sec_interv_date') }}">
            @error('sec_interv_date')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group">
            <label for="sec_interv_staff">二次面接の対応者名</label>
            <select name="sec_interv_staff" id="sec_interv_staff" style="width:101%; height:40px;">
                <option value="" {{ old('sec_interv_staff') == '' ? 'selected' : '' }}
                    style="text-align: center;"></option>
                <option value="西田" {{ old('sec_interv_staff') == '西田' ? 'selected' : '' }}
                    style="text-align: center;">西田</option>
                <option value="新島" {{ old('sec_interv_staff') == '新島' ? 'selected' : '' }}
                    style="text-align: center;">新島</option>
            </select>
            @error('sec_interv_staff')
                <span style="color: red; font-size: 15px; display:none;">{{ $errors->first('first_interv_staff') }}</span>
            @enderror
        </div>
        <div class="form-group">
            <strong>合否</strong><br>
            <input type="radio" name="sec_interv_result" id="option11" value="0" class=""
                id="sec_interv_result" {{ old('sex') === 0 ? 'checked' : '' }}>
            <label for="option11">
                不合格
            </label><br>
            <input type="radio" name="sec_interv_result" id="option22" value="1"
                {{ old('sec_interv_result') === 1 ? 'checked' : '' }}>
            <label for="option22">
                合格
            </label><br>
            <input type="radio" name="sec_interv_result" id="option33" value="2"
                {{ old('sec_interv_result') === 2 ? 'checked' : '' }}>
            <label for="option33">
                未定
            </label>
            <br>
            @error('sec_interv_result')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        {{-- </div> --}}
        <br>
        <div class="form-control">
            <h4 style="text-align: center;">インターン</h4>
            <div class="form-group">
                <label for="intern_interv_date">実施日</label><br>
                <input type="date" name="intern_interv_date" max="{{ date('Y-m-d') }}">
                <br>
            </div>
            <div class="form-group">
                <label for="intern_department">インターンの対応部署名</label>
                <select name="intern_department" id="intern_department"style="width:101%; height:40px;">
                    <option></option>
                    <option value="SE">システムエンジニア（SE）</option>
                    <option value="経営">経営</option>
                </select>
                <br>
                @error('intern_department')
                    <span style="color: red; font-size: 15px;">{{ $message }}</span>
                @enderror
                <br>

                <div class="form-group">
                    <strong>合否</strong><br>
                    <input type="radio" name="intern_result" id="option7" value="0" class=""
                        id="intern_result" {{ old('sex') === 0 ? 'checked' : '' }}>
                    <label for="option11">
                        不合格
                    </label><br>
                    <input type="radio" name="intern_result" id="option8" value="1"
                        {{ old('intern_result') === 1 ? 'checked' : '' }}>
                    <label for="option22">
                        合格
                    </label><br>
                    <input type="radio" name="intern_result" id="option9" value="2"
                        {{ old('intern_result') === 2 ? 'checked' : '' }}>
                    <label for="option33">
                        未定
                    </label>
                    <br>
                    @error('intern_result')
                        <span style="color: red; font-size: 15px;">{{ $message }}</span>
                    @enderror
                </div>
            </div>
        </div>
        <br>
        <div class="form-group">
            <label for="">入職日</label>
            <input type="date" name="hire_date" max="{{ date('Y-m-d') }}">
            @error('hire_date')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group" style="position: relative;">
            <label for="phone">電話番号</label>
            <input type="text" name="phone" autocomplete="off" placeholder="" id="phone"
                onfocus="focusPhone()" onblur="PhoneMyFunction()" value="{{ old('phone') }}" class="form-control">
            <div id="phoneError" style="position: absolute;top: 40px;left:570px"></div>
            <small id="phoneErrorText" style="position: absolute;color: red;"></small>
            @error('phone')
                <span style="color: red; font-size: 15px;position: absolute;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group" style="position: relative;">
            <label for="email">メールアドレス</label>
            <input type="text" name="email" id="email" onblur="validateEmail()" onfocus="focusEmail()"
                autocomplete="off" placeholder="例えば、、username@example.com" value="{{ old('email') }}"
                class="form-control">
            {{-- style="width:100%; height:40px; font-size: 17px;position: absolute"> --}}
            <div id="emailError" style="position: absolute; top: 42px;left:570px"></div>
            <small id="emailErrorText" style="color: red; position: absolute"></small>

            @error('email')
                <span style="color: red; font-size: 15px;">{{ $message }}</span>
            @enderror
        </div>
        <br>
        <div class="form-group">
            <label for="skill_jlpt">日本語(JLPT)スキル</label>
            <select name="skill_jlpt" id="skill_jlpt" class="form-control">
                <option value="" {{ old('skill_jlpt') == '' ? 'selected' : '' }}></option>
                <option value="1" {{ old('skill_jlpt') == '1' ? 'selected' : '' }}>N1</option>
                <option value="2" {{ old('skill_jlpt') == '2' ? 'selected' : '' }}>N2</option>
                <option value="3" {{ old('skill_jlpt') == '3' ? 'selected' : '' }}>N3</option>
                <option value="4" {{ old('skill_jlpt') == '4' ? 'selected' : '' }}>N4</option>
                <option value="5" {{ old('skill_jlpt') == '5' ? 'selected' : '' }}>N5</option>
            </select>
        </div><br>
        <div class="form-group">
            <label for="skill_hearing">ヒアリングスキル</label>
            <select name="skill_hearing" id="skill_hearing" class="form-control" value={{ old('') }}>
                <option value="" {{ old('') == '' ? 'selected' : '' }}></option>
                <option value="1" {{ old('skill_hearing') == '1' ? 'selected' : '' }}>N1</option>
                <option value="2" {{ old('skill_hearing') == '2' ? 'selected' : '' }}>N2</option>
                <option value="3" {{ old('skill_hearing') == '3' ? 'selected' : '' }}>N3</option>
                <option value="4" {{ old('skill_hearing') == '4' ? 'selected' : '' }}>N4</option>
                <option value="5" {{ old('skill_hearing') == '5' ? 'selected' : '' }}>N5</option>
            </select>
        </div><br>
        <div class="form-group">
            <label for="">スピーキングスキル</label>
            <select name="skill_speaking" class="form-control" value={{ old('') }}>
                <option value="" {{ old('') == '' ? 'selected' : '' }}></option>
                <option value="1" {{ old('skill_speaking') == '1' ? 'selected' : '' }}>N1</option>
                <option value="2" {{ old('skill_speaking') == '2' ? 'selected' : '' }}>N2</option>
                <option value="3" {{ old('skill_speaking') == '3' ? 'selected' : '' }}>N3</option>
                <option value="4" {{ old('skill_speaking') == '4' ? 'selected' : '' }}>N4</option>
                <option value="5" {{ old('skill_speaking') == '5' ? 'selected' : '' }}>N5</option>
            </select>
        </div><br>
        <div class="form-group">
            <label for="">リーディングスキル</label>
            <select name="skill_reading" class="form-control" value={{ old('') }}>
                <option value="" {{ old('') == '' ? 'selected' : '' }}></option>
                <option value="1" {{ old('skill_reading') == '1' ? 'selected' : '' }}>N1</option>
                <option value="2" {{ old('skill_reading') == '2' ? 'selected' : '' }}>N2</option>
                <option value="3" {{ old('skill_reading') == '3' ? 'selected' : '' }}>N3</option>
                <option value="4" {{ old('skill_reading') == '4' ? 'selected' : '' }}>N4</option>
                <option value="5" {{ old('skill_reading') == '5' ? 'selected' : '' }}>N5</option>
            </select>
        </div><br>

        <div class="form-group">
            <label for="skill_se">SEスキル</label>
            <br>
            <select class="skill_se" name="skill_se[]" id="skill_se" style="width:100%, height:30px;" multiple>
                @foreach ($skills as $skill)
                    <option value="{{ $skill->name }}">{{ $skill->name }}</option>
                @endforeach
            </select>
            <br>
            <a href="{{ route('skill.create') }}" class="btn btn-outline-secondary">追加</a>
        </div>
        <br>
        <div class="form-group">
            <input type="checkbox" name="graduate_4" value="4" {{ old('graduate_4') ? 'checked' : '' }}>
            <label>4大</label>
        </div>
        <div class="form-group">
            <input type="checkbox" name="graduate_2" value="2" {{ old('graduate_2') ? 'checked' : '' }}>
            <label>専門</label>
        </div>
        <div class="form-group">
            <label for="graduate_school">最終学歴</label>
            <input type="text" name="graduate_school" autocomplete="off" placeholder="" id="graduate_school"
                class="form-control" value={{ old('graduate_school') }}>
        </div><br>
        <div class="form-group">
            <label for="apply_department">応募職種</label>
            <select name="apply_department" id="apply_department" class="form-control">
                <option value selected=""></option>
                <option value="SE" {{ old('apply_department') == 'SE' ? 'selected' : '' }}>SE</option>
                <option value="営業"{{ old('apply_department') == '営業' ? 'selected' : '' }}>営業</option>
            </select>
        </div><br>
        <div class="form-group">
            <label for="">希望勤務地</label>
            <select name="working_place" class="form-control">
                <option value="" {{ old('working_place') == '' ? 'selected' : '' }}></option>
                <option value="東京" {{ old('working_place') == '東京' ? 'selected' : '' }}>東京</option>
                <option value="大阪" {{ old('working_place') == '大阪' ? 'selected' : '' }}>大阪</option>
                <option value="名古屋" {{ old('working_place') == '名古屋' ? 'selected' : '' }}>名古屋</option>
                <option value="埼玉" {{ old('working_place') == '埼玉' ? 'selected' : '' }}>埼玉</option>
                <option value="神戸" {{ old('working_place') == '神戸' ? 'selected' : '' }}>神戸</option>
                <option value="札幌" {{ old('working_place') == '札幌' ? 'selected' : '' }}>札幌</option>
            </select>
        </div><br>
        <div class="form-group">
            <label for="current_status">現在の状況</label>
            <input type="text" name="current_status" autocomplete="off" id="current_status"
                value="{{ old('current_status') }}">
        </div><br>
        <div class="form-group">
            <label for="input-field">自由項目</label><br>
            <textarea class="input-field" name="note" id="input-field" autocomplete="off" style="border-radius: 10px;">{{ old('note') }}</textarea>
        </div>
        <br>
        <a href="{{ route('student.index') }}" class="button">キャンセル</a>
        <button type="submit" id="submitBtn">更新</button>
    </form>
    </form>

    {{-- <script src="{{ asset('chosen/jquery.min.js') }}"></script> --}}
    {{-- <script src="{{ asset('chosen/chosen.jquery.min.js') }}"></script> --}}

    <script src="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/js/multi-select-tag.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        new MultiSelectTag('skill_se');
    </script>
    {{-- <script>
        $(document).ready(function() {
            $(document).on('click','.input-container',function(e) {
                $('.drawer').removeClass('hidden');
            });
        });
    </script> --}}

</body>

</html>
