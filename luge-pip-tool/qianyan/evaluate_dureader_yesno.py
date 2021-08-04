import  json

def dureader_yesno_evaluate(ref_ans, pred_ans, **params):
    skip_count=0
    correct_num=0
    for answer in ref_ans:
        if answer['id'] not in pred_ans:
            skip_count+=1
            continue
        if answer['labels']==pred_ans[answer['id']]:
            correct_num+=1
    return json.dumps({'accuracy': correct_num * 1.0 / len(ref_ans), 'total count': len(ref_ans), 'skip count':skip_count})
    