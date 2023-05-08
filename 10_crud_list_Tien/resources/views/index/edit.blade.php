<!DOCTYPE html>
<html lang="en">

</head>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('chosen/chosen.min.css') }}">
    {{-- <link rel="stylesheet" href="{{ asset('/css/createValidator.css') }}"> --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link
        rel="stylesheet"href="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/css/multi-select-tag.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="{{ asset('/js/index.js') }}"></script>
    <title>Document</title>
</head>

<body>
    <style>
        .content {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #176e1eed;
            z-index: 1000;
        }
    </style>
    <div class="content" style="text-align: center;">
        <h3>修正</h3>
    </div>
    <div class="container">
        <div style="width:100%">
            <form action="{{ route('student.update', $student->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="row">
                    <div class="col-md-6">
                        <br><br><br>
                        <div class="form-group" style="position: relative;">
                            <label for="name">氏名<span style="color: red">（＊必須）</span></label>
                            <input type="text" name="name" autocomplete="of" onblur="myFunctionName()"
                                onfocus="focusName()" placeholder="" id="name"
                                value="{{ old('name') }}{{ $student->name }}" class="form-control">

                            <div id="nameError" style="position: absolute; top: 42px;left:570px"></div>
                            <div id="nameErrorText" style="position: absolute;color: red;"></div>
                            @error('name')
                                <span id="mes"
                                    style="position: absolute; color: red; font-size: 15px; ">{{ $message }}</span>
                            @enderror
                        </div>
                        <br>
                        <div class="form-group"style="position: relative;">
                            <label for="name_kana">氏名 (カタカナ)</label>
                            <input type="text" name="name_kana" autocomplete="off" onblur="myFunctionName_kana()"
                                onfocus="focusName_kana()" placeholder="カタカナで入力してください。。" id="name_kana"
                                value="{{ old('name_kana') }}{{ $student->name_kana }}" class="form-control">
                            <div id="name_kanaError" style="position: absolute; top: 42px;left:570px"></div>
                            <small id="name_ErrorText" style="position: absolute;color: red;"></small>


                            @if ($errors->has('name_kana'))
                                <span id="mes"
                                    style="color: red; font-size: 15px;">{{ $errors->first('name_kana') }}</span>
                            @endif
                        </div>
                        <br>
                        <div class="form-control">
                            <label for="sex">性別</label><br>
                            <input type="radio" name="sex" id="option1" value="1" class=""
                                id="sex" @if ($student->sex === 1) checked @endif>
                            <label for="option1">
                                男
                            </label>
                            <input type="radio" name="sex" id="option2" value="2"
                                @if ($student->sex === 2) checked @endif>
                            <label for="option2">
                                女
                            </label>
                            <input type="radio" name="sex" id="option3" value="0" {{-- {{ old('sex') === 0 ? 'checked' : '' }} --}}
                                @if ($student->sex === 0) checked @endif>
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
                            <input type="date" name="birthday" id="birthday"
                                value="{{ old('birthday') }}{{ $student->birthday }}"><br>
                            @error('birthday')
                                <span style="color: red; font-size: 15px;">{{ $message }}</span>
                            @enderror
                        </div><br>

                        <div class="form-group">
                            <label for="age">年齢</label>
                            <input type="number" name="age" autocomplete="off" id="age" class="form-control"
                                value="{{ old('age') }}{{ $student->age }}">
                            @error('age')
                                <span style="color: red; font-size: 15px;">{{ $message }}</span>
                            @enderror
                        </div>
                        <br>

                        <div class="form-group">
                            <label for="country">出身国</label><br>
                            <select name="country" id="country" class="form-control" style="width:104%; height:40px;">
                                <option value="" @if (old('country') == '' || $student->country == '') selected @endif></option>
                                <option value="日本" @if (old('country') == '日本' || $student->country == '日本') selected @endif>日本</option>
                                <option value="アメリカ" @if (old('country') == 'アメリカ' || $student->country == 'アメリカ') selected @endif>アメリカ</option>
                                <option value="ロシア" @if (old('country') == 'ロシア' || $student->country == 'ロシア') selected @endif>ロシア</option>
                                <option value="ウズベキスタン" @if (old('country') == 'ウズベキスタン' || $student->country == 'ウズベキスタン') selected @endif>ウズベキスタン
                                </option>
                                <option value="バングラデシュ" @if (old('country') == 'バングラデシュ' || $student->country == 'バングラデシュ') selected @endif>バングラデシュ
                                </option>
                                <option value="ベトナム" @if (old('country') == 'ベトナム' || $student->country == 'ベトナム') selected @endif>ベトナム</option>
                                <option value="イギリス" @if (old('country') == 'イギリス' || $student->country == 'イギリス') selected @endif>イギリス
                                </option>
                                <option value="フランス" @if (old('country') == 'フランス' || $student->country == 'フランス') selected @endif>フランス
                                </option>
                                <option value="ドイツ" @if (old('country') == 'ドイツ' || $student->country == 'ドイツ') selected @endif>ドイツ</option>
                            </select>
                            @if ($errors->has('country'))
                                <span style="color: red; font-size: 15px;">{{ $errors->first('country') }}</span>
                            @endif
                        </div>
                        <br>
                        <div class="form-control">
                            <h4 style="text-align: center;">一次面接</h4><br>
                            <div class="form-group">
                                <label for="date">実施日</label>
                                <input type="date" name="first_interv_date" id="date"
                                    max="{{ date('Y-m-d') }}" value="{{ old('first_interv_date') }}{{$student->first_interv_date}}">
                                @error('first_interv_date')
                                    <span style="color: red; font-size: 15px;">{{ $message }}</span>
                                @enderror
                            </div>
                            <br>
                            <div>
                                <strong>合否</strong><br>
                                <input type="radio" name="first_interv_result" id="option1" value="00"
                                    @if ($student->first_interv_result === 0) checked @endif>
                                <label for="option1">
                                    不合格
                                </label>
                                <input type="radio" name="first_interv_result" id="option2" value="11"
                                    @if ($student->first_interv_result === 1) checked @endif>
                                <label for="option2">
                                    合格
                                </label>
                                <input type="radio" name="first_interv_result" id="option3" value="22"
                                    @if ($student->first_interv_result === 2) checked @endif>
                                <label for="option3">
                                    未定
                                </label>
                            </div>
                            {{-- <strong>合否</strong><br>
                            <input type="radio" name="first_interv_result" id="option111" value="1"
                                @if ( old('first_interv_result') == 1 || $student->first_interv_result == 1) checked  @endif>
                            <label for="option22">
                                合格
                            </label><br>
                            <input type="radio" name="first_interv_result" id="option222" value="2"
                            @if ( old('first_interv_result') == 2 || $student->first_interv_result == 2) checked  @endif>
                            <label for="option33">
                                不合格
                            </label>
                            <br>
                            <input type="radio" name="first_interv_result" id="option333" value="0"
                                class="" id="first_interv_result" 
                                @if ( old('first_interv_result') == 0 || $student->first_interv_result === 0) checked  @endif>
                            <label for="option11">
                                未定
                            </label>
                            <br> --}}
                        </div>
                        <br>
                        <div class="form-control">
                            <h4 style="text-align: center;">二次面接</h4><br>
                            <div>
                                <strong>実施日</strong>
                                <input type="date" name="sec_interv_date" value="{{ $student->sec_interv_date }}"
                                    max="{{ date('Y-m-d') }}">
                            </div><br>
                            <div>
                                <strong>対応者名</strong>
                                <select name="sec_interv_staff">
                                    <option value=""></option>
                                    <option value="西田" @if ($student->sec_interv_staff == '西田') selected @endif>西田
                                    </option>
                                    <option value="新島" @if ($student->sec_interv_staff == '新島') selected @endif>新島
                                    </option>
                                </select>
                            </div><br>
                            <div>
                                <strong>合否</strong><br>
                                <input type="radio" name="sec_interv_result" id="option1" value="0"
                                    @if ($student->sec_interv_result === 0) checked @endif>
                                <label for="option1">
                                    不合格
                                </label>
                                <input type="radio" name="sec_interv_result" id="option2" value="1"
                                    @if ($student->sec_interv_result === 1) checked @endif>
                                <label for="option2">
                                    合格
                                </label>
                                <input type="radio" name="sec_interv_result" id="option3" value="2"
                                    @if ($student->sec_interv_result === 2) checked @endif>
                                <label for="option3">
                                    未定
                                </label>
                            </div>
                            <br>
                        </div>
                        <br>
                        <div class="form-control">
                            <h4 style="text-align: center;">インターン</h4><br>
                            <div>
                                <strong>入職日</strong>
                                <input type="date" name="hire_date" value="{{ $student->hire_date }}"
                                    max="{{ date('Y-m-d') }}">
                            </div><br>
                            <div>
                                <strong>対応部署名</strong>
                                <select name="intern_department">
                                    <option>インターン対応部署</option>
                                    <option value=""></option>
                                    <option value="SE" @if ($student->intern_department == 'SE') selected @endif>SE
                                    </option>
                                    <option value="経営" @if ($student->intern_department == '経営') selected @endif>経営
                                    </option>
                                </select>
                            </div><br>
                            <div>
                                <strong>合否</strong><br>
                                <input type="radio" name="intern_result" id="option1" value="0"
                                    @if ($student->intern_result === 0) checked @endif>
                                <label for="option1">
                                    不合格
                                </label>
                                <input type="radio" name="intern_result" id="option2" value="1"
                                    @if ($student->intern_result === 1) checked @endif>
                                <label for="option2">
                                    合格
                                </label>
                                <input type="radio" name="intern_result" id="option3" value="2"
                                    @if ($student->intern_result === 2) checked @endif>
                                <label for="option3">
                                    未定
                                </label>
                            </div><br>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <br><br><br>
                        <div>
                            <strong>電話番号</strong>
                            <input type="text" name="phone" value="{{ $student->phone }}" autocomplete="off"
                                placeholder="">
                        </div><br>
                        <div class="fom-group">
                            <strong>メールアドレス</strong>
                            <input type="text" name="email" value="{{ $student->email }}" autocomplete="off"
                                placeholder="">
                        </div><br>
                        <div>
                            <strong>日本語(JLPT)スキル</strong>
                            <select name="skill_jlpt">
                                <option></option>
                                <option value="1" @if ($student->skill_jlpt === 1) selected @endif>N1
                                </option>
                                <option value="2" @if ($student->skill_jlpt === 2) selected @endif>N2
                                </option>
                                <option value="3" @if ($student->skill_jlpt === 3) selected @endif>N3
                                </option>
                                <option value="4" @if ($student->skill_jlpt === 4) selected @endif>N4
                                </option>
                                <option value="5" @if ($student->skill_jlpt === 5) selected @endif>N5
                                </option>
                            </select>
                        </div><br>
                        <div>
                            <strong>ヒアリングスキル</strong>
                            <select name="skill_hearing">
                                <option></option>
                                <option value="1" @if ($student->skill_hearing === 1) selected @endif>N1
                                </option>
                                <option value="2" @if ($student->skill_hearing === 2) selected @endif>N2
                                </option>
                                <option value="3" @if ($student->skill_hearing === 3) selected @endif>N3
                                </option>
                                <option value="4" @if ($student->skill_hearing === 4) selected @endif>N4
                                </option>
                                <option value="5" @if ($student->skill_hearing === 5) selected @endif>N5
                                </option>
                            </select>
                        </div><br>
                        <div>
                            <strong>スピーキングスキル</strong>
                            <select name="skill_speaking">
                                <option></option>
                                <option value="1" @if ($student->skill_speaking === 1) selected @endif>N1
                                </option>
                                <option value="2" @if ($student->skill_speaking === 2) selected @endif>N2
                                </option>
                                <option value="3" @if ($student->skill_speaking === 3) selected @endif>N3
                                </option>
                                <option value="4" @if ($student->skill_speaking === 4) selected @endif>N4
                                </option>
                                <option value="5" @if ($student->skill_speaking === 5) selected @endif>N5
                                </option>
                            </select>
                        </div><br>
                        <div>
                            <strong>リーディングスキル</strong>
                            <select name="skill_reading">
                                <option selected></option>
                                <option value="1" @if ($student->skill_reading === 1) selected @endif>N1
                                </option>
                                <option value="2" @if ($student->skill_reading === 2) selected @endif>N2
                                </option>
                                <option value="3" @if ($student->skill_reading === 3) selected @endif>N3
                                </option>
                                <option value="4" @if ($student->skill_reading === 4) selected @endif>N4
                                </option>
                                <option value="5" @if ($student->skill_reading === 5) selected @endif>N5
                                </option>
                            </select>
                        </div><br>

                        <div class="form-group">
                            <strong>SEスキル</strong>
                            <select name="skill_se[]" id="skill_se" class="form-select" multiple>
                                @foreach ($skills as $skill)
                                    <option value="{{ $skill->name }}"
                                        {{ in_array($skill->name, $student->skill_se) ? 'selected' : '' }}>
                                        {{ $skill->name }}
                                    </option>
                                @endforeach
                            </select>
                            <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                data-bs-target="#myModal">追加</button>
                        </div>


                        {{-- @include('skills.modal') --}}
                        <br>
                        <strong>学歴</strong><br>
                        <div>
                            <input type="checkbox" name="graduate_4" value="1"
                                {{ old('graduate_4', $student->graduate_4) == 1 ? 'checked' : '' }}>
                            <label>4大</label>
                        </div>
                        <div>
                            <input type="checkbox" name="graduate_2" value="1"
                                {{ old('graduate_2', $student->graduate_2) == 1 ? 'checked' : '' }}>
                            <label>専門</label>
                        </div><br>
                        <div>
                            <strong>最終学歴</strong>
                            <input type="text" name="graduate_school" value="{{ $student->graduate_school }}"
                                autocomplete="off" placeholder="">
                        </div><br>
                        <div>
                            <strong>応募職種</strong>
                            <select name="apply_department">
                                <option value="" @if (is_null($student->apply_department)) selected @endif>
                                </option>
                                <option value="SE" @if ($student->apply_department == 'SE') selected @endif>SE
                                </option>
                                <option value="営業" @if ($student->apply_department == '営業') selected @endif>営業
                                </option>
                            </select>
                        </div><br>
                        <div>
                            <strong>希望勤務地</strong>
                            <select name="working_place">
                                <option value=""></option>
                                <option value="東京" @if ($student->working_place == '東京') selected @endif>東京
                                </option>
                                <option value="大阪" @if ($student->working_place == '大阪') selected @endif>大阪
                                </option>
                                <option value="名古屋" @if ($student->working_place == '名古屋') selected @endif>名古屋
                                </option>
                                <option value="埼玉" @if ($student->working_place == '埼玉') selected @endif>埼玉
                                </option>
                                <option value="神戸" @if ($student->working_place == '神戸') selected @endif>神戸
                                </option>
                                <option value="札幌" @if ($student->working_place == '札幌') selected @endif>札幌
                                </option>
                            </select>
                        </div><br>
                        <div>
                            <strong>現在の状況</strong>
                            <input type="text" name="current_status" value="{{ $student->current_status }}"
                                autocomplete="off">
                        </div><br>
                        <div>
                            <strong>自由項目</strong><br>
                            <textarea class="input-field" name="note" autocomplete="off" style="border-radius: 10px;">{{ $student->note }}</textarea>
                        </div><br>

                        <a href="{{ route('student.index') }}" class="button">キャンセル</a>
                        <button type="submit">更新</button>
                    </div><br>
                </div>
        </div>
        </form>
    </div>
    </div>


    <script src="https://cdn.jsdelivr.net/gh/habibmhamadi/multi-select-tag/dist/js/multi-select-tag.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    <script>
        new MultiSelectTag('skill_se') // id
    </script>

</body>
