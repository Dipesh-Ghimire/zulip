// These declarations tell the TypeScript compiler about the existence
// of the global variables for our untyped JavaScript modules.  Please
// remove each declaration when the corresponding module is migrated
// to TS.

declare let zulip_test: any;

interface JQuery {
    expectOne(): JQuery;
}

interface Window {
    last_stacktrace: string;
    page_params_parse_time: number;
}
