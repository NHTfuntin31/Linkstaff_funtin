import { useState, useEffect } from "react";

type SelectProps = {
    option?: number | string,
    getData?: FunctionStringCallback
}
const Select = (props: SelectProps) => {
    const option = props.option;
    const optionValue = Number(option);
    const [jobType, setJobType] = useState<number|string>(0);
    if (props.getData) {
        props.getData(String(jobType))
    }
    useEffect(() => {
        setJobType(0);
    },[optionValue])
    if (optionValue == 1) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21011">SE・PG(BtoC/自社)</option>
                    <option value="21019">SE・PG(BtoC/受託)</option>
                    <option value="21012">SE・PG(BtoB/自社)</option>
                    <option value="21020">SE・PG(BtoB/受託)</option>
                    <option value="21027">プロジェクトマネージャー・リーダー(BtoC/自社)</option>
                    <option value="21024">プロジェクトマネージャー・リーダー(BtoC/受託)</option>
                    <option value="21028">プロジェクトマネージャー・リーダー(BtoB/自社)</option>
                    <option value="21015">プロジェクトマネージャー・リーダー(BtoB/受託)</option>
                    <option value="21017">プロジェクトマネージャー・リーダー(汎用系)</option>
                    <option value="21013">SE・PG(汎用系)</option>
                    <option value="21029">SE・PG(組込・制御系/機械・電子部品)</option>
                    <option value="21032">SE・PG(組込・制御系/自動車)</option>
                    <option value="21033">SE・PG(組込・制御系/家電・AV機器・スマートフォン)</option>
                    <option value="21034">SE・PG(組込・制御系/産業機械)</option>
                    <option value="21035">SE・PG(組込・制御系/IoT)</option>
                    <option value="21014">SE・PG(組込・制御系/その他)</option>
                    <option value="21018">プロジェクトマネージャー・リーダー(組込・制御系)</option>
                    <option value="21030">プロダクトマネージャー</option>
                    <option value="21036">AI・機械学習エンジニア(ソフトウェア開発)</option>
                    <option value="21031">PMO</option>
                    <option value="21413">研究開発・アーキテクト</option>
                    <option value="21026">システム開発マネージャー</option>
                    <option value="21414">その他ソフト開発・システムエンジニア</option>
                </select>
            </div>
        )
    } else if (optionValue == 2) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21110">WEBデザイナー(自社)</option>
                    <option value="21116">WEBデザイナー(受託)</option>
                    <option value="21111">WEB/モバイルディレクター・プロデューサー(自社)</option>
                    <option value="21117">WEB/モバイルディレクター・プロデューサー(受託)</option>
                    <option value="21128">アートディレクター</option>
                    <option value="21129">テクニカルディレクター</option>
                    <option value="21130">クリエイティブディレクター(広告/グラフィック)</option>
                    <option value="21123">WEBコンサルタント</option>
                    <option value="21112">サイト運営・編集  等</option>
                    <option value="21118">コーダー・マークアップエンジニア</option>
                    <option value="21126">UI・UXデザイン</option>
                    <option value="21115">グラフィックデザイナー</option>
                    <option value="21121">映像制作・編集・アニメーション</option>
                    <option value="21131">CGデザイナー(マルチメディア)</option>
                    <option value="21122">イラストレーター・キャラクターデザイン</option>
                    <option value="21124">WEB制作マネージャー</option>
                    <option value="21125">編集・ライター</option>
                    <option value="21133">DTPオペレーター</option>
                    <option value="21134">その他クリエイティブ</option>
                </select>
            </div>
        )
    } else if (optionValue == 3) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21710">ゲームプログラマー(コンシュマー系)</option>
                    <option value="21714">ゲームプログラマー(ブラウザ/オンライン)</option>
                    <option value="21725">ゲームプログラマー(スマートフォン/ネイティブ)</option>
                    <option value="21726">ゲームプログラマー(パチンコ/パチスロ)</option>
                    <option value="21727">プロジェクトマネージャー・リーダー(ゲームプログラマー)</option>
                    <option value="21730">2Dデザイナー(コンシュマー)</option>
                    <option value="21712">2Dデザイナー(オンライン/ソーシャル/ネイティブ)</option>
                    <option value="21731">2Dデザイナー(パチンコ/パチスロ)</option>
                    <option value="21732">3Dデザイナー(コンシュマー)</option>
                    <option value="21715">3Dデザイナー(オンライン/ソーシャル/ネイティブ)</option>
                    <option value="21733">3Dデザイナー(パチンコ/パチスロ)</option>
                    <option value="21729">UI・UXデザイナー(ゲーム)</option>
                    <option value="21716">ゲームマスター・運営</option>
                    <option value="21711">ゲームプランナー・ディレクター・プロデューサー(コンシュマー系)</option>
                    <option value="21717">ゲームプランナー・ディレクター・プロデューサー(オンライン/ソーシャル/ネイティブ)</option>
                    <option value="21734">ゲームプランナー・ディレクター・プロデューサー(パチンコ/パチスロ)</option>
                    <option value="21735">シナリオライター</option>
                    <option value="21718">サウンドクリエイター</option>
                    <option value="21719">デバッガー・テスター・QA(ゲーム)</option>
                    <option value="21723">アートディレクター(ゲーム)</option>
                    <option value="21722">ゲーム制作マネージャー</option>
                    <option value="21713">その他ゲーム制作</option>
                </select>
            </div>
        )
    } else if (optionValue == 4) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21217">ネットワークエンジニア(自社)</option>
                    <option value="21210">ネットワークエンジニア(SI・受託)</option>
                    <option value="21218">サーバーエンジニア(自社)</option>
                    <option value="21213">サーバーエンジニア(SI・受託)</option>
                    <option value="21312">システム運用・保守</option>
                    <option value="21219">プロジェクトマネージャー・リーダー(ネットワーク/サーバー)(自社)</option>
                    <option value="21214">プロジェクトマネージャー・リーダー(ネットワーク/サーバー)(受託)</option>
                    <option value="21211">セキュリティエンジニア</option>
                    <option value="21216">データベースエンジニア</option>
                    <option value="21220">移動体通信エンジニア</option>
                    <option value="21215">IDC・施設管理</option>
                    <option value="21212">その他通信・インフラエンジニア</option>
                </select>
            </div>
        )
    } else if (optionValue == 5) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21612">ITコンサルタント・システムアナリスト・システム監査</option>
                    <option value="21610">プリセールス・セールスエンジニア(システム開発・導入)</option>
                    <option value="21613">ERP(開発・導入・コンサルタント)</option>
                    <option value="21615">経営コンサルタント、戦略コンサルタント</option>
                    <option value="21616">財務コンサルタント、会計コンサルタント</option>
                    <option value="21617">組織コンサルタント、人事コンサルタント</option>
                    <option value="21618">製造業コンサルタント、物流コンサルタント</option>
                    <option value="21619">営業コンサルタント、マーケティングコンサルタント</option>
                    <option value="21625">技術コンサルタント</option>
                    <option value="21620">研究調査員、リサーチャー</option>
                    <option value="21622">公認会計士、税理士</option>
                    <option value="21623">弁護士、弁理士</option>
                    <option value="21624">司法書士、行政書士</option>
                    <option value="21626">その他専門コンサルタント</option>
                    <option value="21614">その他コンサルタント・プリセールス</option>
                </select>
            </div>
        )
    } else if (optionValue == 6) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21310">社内情報システム・社内SE(インフラ)</option>
                    <option value="21316">社内情報システム・社内SE(開発)</option>
                    <option value="21317">ヘルプデスク</option>
                    <option value="21311">カスタマーサポート</option>
                    <option value="21318">スーパーバイザー(コールセンター)</option>
                    <option value="21320">スーパーバイザー(BPOセンター)</option>
                    <option value="21319">カスタマーサポート(ゲーム)</option>
                    <option value="21314">テクニカルサポート</option>
                    <option value="21315">システムインストラクター・トレーナー</option>
                    <option value="21313">その他ヘルプデスク・ユーザーサポート</option>
                </select>
            </div>
        )
    } else if (optionValue == 7) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25010">営業(システム開発)</option>
                    <option value="25011">営業(総合広告)</option>
                    <option value="25013">営業(インターネット広告・WEBサイト制作)</option>
                    <option value="25035">営業(ソフトウェア)</option>
                    <option value="25015">営業(ハードウェア)</option>
                    <option value="25016">営業(ゲーム会社)</option>
                    <option value="25023">営業(人材紹介)</option>
                    <option value="25024">営業(人材派遣)</option>
                    <option value="25025">営業(コーディネーター・カウンセラー)</option>
                    <option value="25026">営業(保険系)</option>
                    <option value="25027">営業(証券系)</option>
                    <option value="25028">営業(金融法人系)</option>
                    <option value="25029">営業(金融個人・ファイナンシャルプランナー)</option>
                    <option value="25030">営業(不動産個人)</option>
                    <option value="25031">営業(不動産法人)</option>
                    <option value="25034">営業(ものづくり系)</option>
                    <option value="25042">営業(建設・建築系)</option>
                    <option value="25036">営業(食品・飲料)</option>
                    <option value="25040">営業(消費財・日用品・その他)</option>
                    <option value="25037">営業(OA・その他製品)</option>
                    <option value="25038">営業(MR・医療関連)</option>
                    <option value="25041">カスタマーサクセス</option>
                    <option value="25032">代理店営業</option>
                    <option value="25019">海外営業</option>
                    <option value="25020">メディアプランナー</option>
                    <option value="25039">営業(OEM)</option>
                    <option value="25022">営業マネージャー</option>
                    <option value="25017">その他個人営業</option>
                    <option value="25018">その他法人営業</option>
                </select>
            </div>
        )
    } else if (optionValue == 8) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25311">新規事業開発・事業企画</option>
                    <option value="25313">BPR</option>
                    <option value="25312">経営企画</option>
                    <option value="25314">管理会計</option>
                    <option value="25310">営業企画</option>
                </select>
            </div>
        )
    } else if (optionValue == 9) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25410">マーケティング・プロモーション・リサーチャー</option>
                    <option value="25412">WEBマーケティング(SEM・SEO・アクセス解析系)</option>
                    <option value="25414">広告運用・制作進行管理(Web広告)</option>
                    <option value="25413">データアナリスト・データサイエンティスト</option>
                </select>
            </div>
        )
    } else if (optionValue == 10) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25210">総務</option>
                    <option value="25211">経理・税務</option>
                    <option value="25223">財務・IPO・M&amp;A</option>
                    <option value="25213">広報</option>
                    <option value="25237">IR</option>
                    <option value="25219">人事(採用)</option>
                    <option value="25235">人事(制度企画)</option>
                    <option value="25236">人事(教育・研修)</option>
                    <option value="25222">人事(労務)</option>
                    <option value="25220">法務・コンプライアンス</option>
                    <option value="25233">内部監査・内部統制</option>
                    <option value="25221">特許・知的財産関連</option>
                    <option value="25215">営業事務</option>
                    <option value="25229">秘書</option>
                    <option value="25230">一般事務</option>
                    <option value="25227">事務・管理(金融・保険・証券系)</option>
                    <option value="25225">経理マネージャー</option>
                    <option value="25224">人事マネージャー</option>
                    <option value="25226">総務マネージャー</option>
                    <option value="25238">管理本部長・管理部長</option>
                    <option value="25217">その他事務・管理</option>
                </select>
            </div>
        )
    } else if (optionValue == 11) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25610">接客・販売(外食)</option>
                    <option value="25622">接客・販売(服飾・雑貨)</option>
                    <option value="25623">接客・販売(アミューズメント)</option>
                    <option value="25624">接客・販売(小売)</option>
                    <option value="25625">接客・販売(ホテル)</option>
                    <option value="25626">接客・販売(冠婚葬祭)</option>
                    <option value="25611">カウンターセールス</option>
                    <option value="25631">スーパーバイザー・エリアマネージャー(店舗系)</option>
                    <option value="25632">FC開発・店舗開発</option>
                    <option value="25612">塾・教育関連職</option>
                    <option value="25613">教室長</option>
                    <option value="25614">イベント関連(企画・設営・運営スタッフ)</option>
                    <option value="25615">芸能マネージャー</option>
                    <option value="25616">カーディーラー</option>
                    <option value="25619">軽作業・ラインスタッフ</option>
                    <option value="25620">デザイナー・パタンナー(服飾・雑貨)</option>
                    <option value="25627">料理長・シェフ</option>
                    <option value="25628">調理師・キッチンスタッフ</option>
                    <option value="25633">その他販売・サービス</option>
                </select>
            </div>
        )
    } else if (optionValue == 12) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25228">貿易関連・輸出入</option>
                    <option value="25231">資材・購買(ものづくり系)</option>
                    <option value="25801">資材・購買(その他)</option>
                    <option value="25621">MD・バイヤー(服飾・雑貨)</option>
                    <option value="25630">MD・バイヤー(その他)</option>
                    <option value="25232">物流・SCM(メーカー)</option>
                    <option value="25234">物流・SCM(3PL)</option>
                    <option value="25617">ドライバー</option>
                    <option value="25802">倉庫・配送管理</option>
                    <option value="25803">その他物流・運輸・購買</option>
                </select>
            </div>
        )
    } else if (optionValue == 13) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21410">ローカライズ・翻訳</option>
                    <option value="21415">テスト・評価</option>
                    <option value="21411">QA・品質管理</option>
                    <option value="21433">QA・テスト・評価(組込系)</option>
                    <option value="21424">製品開発・製品企画(化学・素材・原料)</option>
                    <option value="21423">研究職(化学・素材・原料)</option>
                    <option value="21425">生産管理(化学・素材・原料)</option>
                    <option value="21426">生産技術(化学・素材・原料)</option>
                    <option value="21427">品質管理(化学・素材・原料)</option>
                    <option value="21417">製品開発・製品企画(食品・消費財・日用品・その他)</option>
                    <option value="21418">研究職(食品・消費財・日用品・その他)</option>
                    <option value="21416">生産管理(食品・消費財・日用品・その他)</option>
                    <option value="21428">生産技術(食品・消費財・日用品・その他)</option>
                    <option value="21429">品質管理(食品・消費財・日用品・その他)</option>
                    <option value="21818">製品企画・プロジェクトマネジメント(ものづくり系)</option>
                    <option value="21419">研究開発/先行開発(ものづくり系)</option>
                    <option value="21420">品質管理・品質保証(ものづくり系)</option>
                    <option value="21430">特許・知的財産関連(ものづくり系)</option>
                    <option value="21432">AI・機械学習エンジニア(ものづくり系)</option>
                    <option value="21421">実験評価(機械)</option>
                    <option value="21422">実験評価(電気)</option>
                    <option value="21412">その他研究、製品開発/品質・評価</option>
                </select>
            </div>
        )
    } else if (optionValue == 14) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="21824">機械・機構設計(機械・電子部品)</option>
                    <option value="21834">機械・機構設計(自動車)</option>
                    <option value="21835">機械・機構設計(家電・AV機器・スマートフォン)</option>
                    <option value="21836">機械・機構設計(産業機械)</option>
                    <option value="21812">機械・機構設計(その他)</option>
                    <option value="21825">回路設計(アナログ)</option>
                    <option value="21810">回路設計(デジタル)</option>
                    <option value="21838">回路設計(デジアナ混載)</option>
                    <option value="21839">回路設計(半導体・IC設計)</option>
                    <option value="21817">光学技術・光学設計</option>
                    <option value="21840">デバイス開発</option>
                    <option value="21841">プロセスエンジニア</option>
                    <option value="21811">生産技術(製造装置・設備設計)</option>
                    <option value="21842">生産技術(工程設計・自動化・IE)</option>
                    <option value="21826">生産技術(電気設計)</option>
                    <option value="21827">生産技術(金型設計)</option>
                    <option value="21813">生産管理</option>
                    <option value="21843">製図、CADオペレーター、トレーサー(ものづくり系)</option>
                    <option value="21816">CAE解析・シミュレーション</option>
                    <option value="21814">セールスエンジニア</option>
                    <option value="21831">FAE</option>
                    <option value="21832">プロダクトデザイナー</option>
                    <option value="21821">サービスエンジニア</option>
                    <option value="21833">整備士</option>
                    <option value="21822">製造スタッフ・技術工</option>
                    <option value="23128">技能工(生産・製造関連)</option>
                    <option value="23129">技能工(整備・メカニック関連)</option>
                    <option value="21844">安全衛生管理</option>
                    <option value="21823">その他ものづくり系エンジニア</option>
                </select>
            </div>
        )
    } else if (optionValue == 15) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25714">創薬研究(シーズ探索・スクリーニング)</option>
                    <option value="26001">創薬研究(非臨床研究)</option>
                    <option value="25715">創薬研究(臨床研究)</option>
                    <option value="26002">臨床開発モニター(CRA)</option>
                    <option value="26003">治験コーディネーター(CRC)</option>
                    <option value="25717">薬事申請</option>
                    <option value="25716">学術・DI</option>
                    <option value="26004">メディカルサイエンスリエゾン(MSL)</option>
                    <option value="26005">メディカルライティング(MW)</option>
                    <option value="26012">バイオインフォマティシャン</option>
                    <option value="26006">統計解析・データマネジメント(製薬・創薬)</option>
                    <option value="26007">安全性情報・PMS</option>
                    <option value="26008">製剤研究</option>
                    <option value="26009">生産技術(製薬・創薬)</option>
                    <option value="26010">生産管理(製薬・創薬)</option>
                    <option value="26011">品質管理・品質保証(製薬・創薬)</option>
                    <option value="25723">管理薬剤師(企業)</option>
                    <option value="25718">その他製薬・創薬系</option>
                </select>
            </div>
        )
    } else if (optionValue == 16) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="26101">医師・歯科医師</option>
                    <option value="26102">獣医師</option>
                    <option value="26103">看護師(病院)</option>
                    <option value="26106">看護師(病院/主任・師長・部長)</option>
                    <option value="26107">看護師(クリニック)</option>
                    <option value="26108">看護師(クリニック/師長・リーダー)</option>
                    <option value="26109">看護師(介護施設)</option>
                    <option value="26110">看護師(訪問看護・訪問介護)</option>
                    <option value="26111">看護師(デイサービス)</option>
                    <option value="26112">看護師(産業看護師)</option>
                    <option value="26113">看護師(公務員)</option>
                    <option value="26114">看護師(企業)</option>
                    <option value="26115">看護師(その他)</option>
                    <option value="26104">診療放射線技師</option>
                    <option value="26105">臨床検査技師</option>
                    <option value="29012">その他医療系専門職</option>
                </select>
            </div>
        )
    } else if (optionValue == 17) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="23010">ディーラー、トレーダー、ファンドマネージャー</option>
                    <option value="23011">金融商品開発、クオンツ、アクチュアリー</option>
                    <option value="23012">投資銀行業務、M&amp;Aコンサル</option>
                    <option value="23013">アナリスト、リサーチ</option>
                    <option value="23014">金融システム企画</option>
                    <option value="23015">その他金融専門職</option>
                </select>
            </div>
        )
    } else if (optionValue == 18) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="23110">建設コンサルタント</option>
                    <option value="23137">コンストラクションマネージャー</option>
                    <option value="23111">測量</option>
                    <option value="23112">設計(建築)</option>
                    <option value="23113">設計(土木)</option>
                    <option value="23114">設計(設備)</option>
                    <option value="23138">設計(内装)</option>
                    <option value="23115">設計(プラント/建築)</option>
                    <option value="23131">設計(プラント/機械)</option>
                    <option value="23132">設計(プラント/電気)</option>
                    <option value="23116">設計(その他)</option>
                    <option value="23136">設計監理</option>
                    <option value="23117">製図、CADオペレーター、トレーサー(建築・土木・設備)</option>
                    <option value="23118">積算</option>
                    <option value="23119">施工管理(建築)</option>
                    <option value="23120">施工管理(土木)</option>
                    <option value="23121">施工管理(設備/電気)</option>
                    <option value="23140">施工管理(設備/通信・弱電)</option>
                    <option value="23141">施工管理(設備/空調・管)</option>
                    <option value="23139">施工管理(内装)</option>
                    <option value="23122">施工管理(プラント/建築)</option>
                    <option value="23133">施工管理(プラント/機械)</option>
                    <option value="23134">施工管理(プラント/電気)</option>
                    <option value="23123">施工管理(その他)</option>
                    <option value="23124">技術開発(建築・土木・プラント・設備)</option>
                    <option value="23125">構造解析(建築・土木・プラント・設備)</option>
                    <option value="23126">特許・調査・その他(建築・土木・プラント・設備)</option>
                    <option value="23127">技能工(建築・土木関連)</option>
                    <option value="23130">プラント/設備・工事計画/立ち上げ</option>
                    <option value="23135">プラント設備保守・メンテナンス</option>
                    <option value="23142">工事・メンテナンス（建築・設備・電気・その他）</option>
                    <option value="23143">その他建設・土木・プラント・設備</option>
                </select>
            </div>
        )
    } else if (optionValue == 19) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="23210">用地仕入、不動産仕入</option>
                    <option value="23211">不動産鑑定</option>
                    <option value="23212">不動産管理(ビル・各種施設)</option>
                    <option value="23218">不動産管理(分譲マンション)</option>
                    <option value="23219">不動産管理(賃貸物件)</option>
                    <option value="23213">プロパティマネジャー</option>
                    <option value="23214">ファシリティマネジャー</option>
                    <option value="23215">アセットマネジャー</option>
                    <option value="23216">不動産事業企画</option>
                    <option value="23217">その他不動産専門職</option>
                </select>
            </div>
        )
    } else if (optionValue == 20) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25110">未経験・第二新卒(SE・PG)</option>
                    <option value="25111">未経験・第二新卒(NE)</option>
                    <option value="25112">未経験・第二新卒(クリエイター)</option>
                    <option value="25113">未経験・第二新卒(ゲーム)</option>
                    <option value="25114">未経験・第二新卒(営業)</option>
                    <option value="25120">未経験・第二新卒(マーケティング)</option>
                    <option value="25115">未経験・第二新卒(バックオフィス)</option>
                    <option value="25117">未経験・第二新卒(ものづくり系)</option>
                    <option value="25119">未経験・第二新卒(建築・土木)</option>
                    <option value="25118">未経験・第二新卒(販売・接客スタッフ)</option>
                    <option value="25116">未経験・第二新卒(その他)</option>
                </select>
            </div>
        )
    } else if (optionValue == 21) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="25510">CEO</option>
                    <option value="25511">COO</option>
                    <option value="25512">CFO</option>
                    <option value="25513">CTO・情シスマネージャー</option>
                    <option value="25514">その他役員</option>
                </select>
            </div>
        )
    } else if (optionValue == 22) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="29010">保育士</option>
                    <option value="29013">介護士</option>
                    <option value="29014">管理栄養士</option>
                    <option value="29015">理学療法士・作業療法士</option>
                    <option value="29016">整体師・柔道整復師</option>
                    <option value="29017">その他福祉・保育・介護系専門職</option>
                </select>
            </div>
        )
    } else if (optionValue == 23) {
        return (
            <div>
                <select name="" value={jobType} className={`inputbox ${jobType == 0 ? 'required' : ''} maxLong`}
                onChange={(e) => setJobType(e.target.value)}>
                    <option value="">選択してください</option>
                    <option value="29901">教員(小・中・高等学校)</option>
                    <option value="29902">官公庁・自治体・団体職員</option>
                    <option value="29999">その他</option>
                </select>
            </div>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Select