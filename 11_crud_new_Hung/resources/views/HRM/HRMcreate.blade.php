<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('chosen/chosen.min.css') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="content">
        <h1>新規登録/編集画面</h1>
    </div>
    <form action="" method="POST">
        @csrf
        <div>
            <strong>氏名</strong>
            <input type="text" name="name" autocomplete="off" placeholder="">
        </div><br>
        <div>
            <strong>氏名 (カタカナ)</strong>
            <input type="text" name="name_kana" autocomplete="off" placeholder="">
        </div><br>
        <div>
            <strong>性別</strong><br>
            <input type="radio" name="sex" id="option1" value="0">
            <label for="option1">
                男
            </label>
            <input type="radio" name="sex" id="option2" value="1">
            <label for="option2">
                女
            </label>
            <input type="radio" name="sex" id="option3" value="2">
            <label for="option3">
                不明
            </label>
        </div><br>
        <div>
            <strong>生年月日</strong>
            <input type="date" name="birthday" max="{{ date('Y-m-d') }}">
        </div><br>
        <div>
            <strong>年齢</strong>
            <input type="number" name="age" autocomplete="off" min="1" max="100">
        </div><br>
        <div>
            <strong>出身国</strong>
            <select name="country">
                <option selected>日本</option>
                <option value="アメリカ">アメリカ</option>
                <option value="ロシア">ロシア</option>
                <option value="ウズベキスタン">ウズベキスタン</option>
                <option value="バングラデシュ">バングラデシュ</option>
                <option value="ベトナム">ベトナム</option>
                <option value="イギリス">イギリス</option>
                <option value="フランス">フランス</option>
                <option value="ドイツ">ドイツ</option>
            </select>
        </div><br>
        <h3>1次面接</h3><br>
        <div>
            <strong>実施日</strong>
            <input type="date" name="first_interv_date" max="{{ date('Y-m-d') }}">
        </div><br>
        <div>
            <strong>対応者名</strong>
            <select name="first_interv_staff">
                <option selected>成田</option>
                <option value="西田">西田</option>
                <option value="新島">新島</option>
            </select>
        </div><br>
        <div>
            <strong>合否</strong><br>
            <input type="radio" name="first_interv_result" id="option1" value="0">
            <label for="option1">
                合格
            </label>
            <input type="radio" name="first_interv_result" id="option2" value="1">
            <label class="form-check-label" for="option2">
                不合格
            </label>
            <input type="radio" name="first_interv_result" id="option3" value="2">
            <label for="option3">
                未定
            </label>
        </div><br>
        <h3>2次面接</h3><br>
        <div>
            <strong>実施日</strong>
            <input type="date" name="sec_interv_date" max="{{ date('Y-m-d') }}">
        </div><br>
        <div>
            <strong>対応者名</strong>
            <select name="sec_interv_staff">
                <option selected>成田</option>
                <option value="西田">西田</option>
                <option value="新島">新島</option>
            </select>
        </div><br>
        <div>
            <strong>合否</strong><br>
            <input type="radio" name="sec_interv_result"id="option1" value="0">
            <label for="option1">
                合格
            </label>
            <input type="radio" name="sec_interv_result" id="option2" value="1">
            <label for="option2">
                不合格
            </label>
            <input type="radio" name="sec_interv_result" id="option3" value="2">
            <label for="option3">
                未定
            </label>
        </div><br>
        <h3>インターン</h3><br>
        <div>
            <strong>入職日</strong>
            <input type="date" name="hire_date" max="{{ date('Y-m-d') }}">
        </div><br>
        <div>
            <strong>対応部署名</strong>
            <select name="intern_department">
                <option selected>インターン対応部署</option>
                <option value="SE">SE</option>
                <option value="経営">経営</option>
            </select>
        </div><br>
        <div>
            <strong>合否</strong><br>
            <input type="radio" name="intern_result" id="option1" value="0">
            <label for="option1">
                合格
            </label>
            <input type="radio" name="intern_result" id="option2" value="1">
            <label for="option2">
                不合格
            </label>
            <input type="radio" name="intern_result" id="option3" value="2">
            <label for="option3">
                未定
            </label>
        </div><br>
        <div>
            <strong>電話番号</strong>
            <input type="text" name="phone" autocomplete="off" placeholder="">
        </div><br>
        <div class="fom-group">
            <strong>メールアドレス</strong>
            <input type="text" name="email" autocomplete="off" placeholder="">
        </div><br>
        <div>
            <strong>日本語(JLPT)スキル</strong>
            <select name="skill_jlpt">
                <option selected></option>
                <option value="1">N1</option>
                <option value="2">N2</option>
                <option value="3">N3</option>
                <option value="4">N4</option>
                <option value="5">N5</option>
            </select>
        </div><br>
        <div>
            <strong>ヒアリングスキル</strong>
            <select name="skill_hearing">
                <option selected></option>
                <option value="1">N1</option>
                <option value="2">N2</option>
                <option value="3">N3</option>
                <option value="4">N4</option>
                <option value="5">N5</option>
            </select>
        </div><br>
        <div>
            <strong>スピーキングスキル</strong>
            <select name="skill_speaking">
                <option selected></option>
                <option value="1">N1</option>
                <option value="2">N2</option>
                <option value="3">N3</option>
                <option value="4">N4</option>
                <option value="5">N5</option>
            </select>
        </div><br>
        <div>
            <strong>リーディングスキル</strong>
            <select name="skill_reading">
                <option selected></option>
                <option value="1">N1</option>
                <option value="2">N2</option>
                <option value="3">N3</option>
                <option value="4">N4</option>
                <option value="5">N5</option>
            </select>
        </div><br>
        <div>
            <strong>SEスキル</strong>
            <select class="skill_se" name="skill_se[]" multiple>
                <option value="Java">Java</option>
                <option value="Go">Go</option>
                <option value="Kotlin">Kotlin</option>
                <option value="Swift">Swift</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Ruby">Ruby</option>
                <option value="HTML, CSS">HTML, CSS</option>
                <option value="SQL">SQL</option>
                <option value="C, C++">C, C++</option>
                <option value="C#">C#</option>
                <option value="R">R</option>
                <option value="Python">Python</option>
                <option value="JavaScript">JavaScript</option>
                <option value="PHP">PHP</option>
                <option value="VBA">VBA</option>
                <option value=".NET">.NET</option>
                <option value="Objective-C">Objective-C</option>
                <option value="Scala">Scala</option>
                <option value="Shell Script">Shell Script</option>
            </select><br><br>
            <button type="button" class="btn btn-info">追加</button>
        </div><br>
        <strong>学歴</strong><br>
        <div>
            <input type="checkbox" name="graduate_4" value="1">
            <label>4大</label>
        </div>
        <div>
            <input type="checkbox" name="graduate_2" value="1">
            <label>専門</label>
        </div><br>
        <div>
            <strong>最終学歴</strong>
            <input type="text" name="graduate_school" autocomplete="off" placeholder="">
        </div><br>
        <div>
            <strong>応募職種</strong>
            <select name="apply_department">
                <option selected>SE</option>
                <option value="営業">営業</option>
            </select>
        </div><br>
        <div>
            <strong>希望勤務地</strong>
            <select name="working_place">
                <option selected value="東京">東京</option>
                <option value="大阪">大阪</option>
                <option value="名古屋">名古屋</option>
                <option value="埼玉">埼玉</option>
                <option value="神戸">神戸</option>
                <option value="札幌">札幌</option>
            </select>
        </div><br>
        <div>
            <strong>現在の状況</strong>
            <input type="text" name="current_status" autocomplete="off">
        </div><br>
        <div>
            <strong>自由項目</strong><br>
            <textarea class="input-field" name="note" autocomplete="off" style="border-radius: 10px;"></textarea>
        </div><br>
        <div>
        </div><br>
        <a href="" class="button">キャンセル</a>
        <button type="submit">更新</button>
    </form>
    <script src="{{ asset('chosen/jquery.min.js') }}"></script>
    <script src="{{ asset('chosen/chosen.jquery.min.js') }}"></script>
    <script>
        $(document).ready(function() {
            $('.skill_se').chosen();
        });
    </script>
</body>

</html>
