import {
    Bar,
    BarChart,
    CartesianGrid,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";


const DISEASE_COLOR = "#1F6B5C";
const HEALTHY_COLOR = "#a5c7b8";
const MAX_BARS = 10;

const formatDate = (timestamp) =>
    new Date(timestamp).toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    });

const dayLabel = (timestamp) =>
    new Date(timestamp).toLocaleDateString("id-ID", { day: "numeric", month: "short" });

const timeLabel = (timestamp) =>
    new Date(timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

const verdict = (signed) =>
    signed > 0 ? "terdiagnosis" : signed < 0 ? "tidak terdiagnosis" : "tidak ada indikasi";


const ChartTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const bar = payload[0].payload;

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md px-3 py-2 text-sm">
            <p className="text-gray-500">{bar.fullDate}</p>
            <p className="font-semibold text-gray-800">
                {bar.percent}% {verdict(bar.signed)}
            </p>
        </div>
    );
};


const ColoredBar = (props) => (
    <Rectangle
        {...props}
        fill={props.payload.signed > 0 ? DISEASE_COLOR : HEALTHY_COLOR}
        radius={[6, 6, 0, 0]}
    />
);


const HistoryChart = ({ history }) => {

    const latest = [...history]
        .sort((a, b) => a.createdAt - b.createdAt)
        .slice(-MAX_BARS);


    const perDay = {};
    latest.forEach((item) => {
        const day = dayLabel(item.createdAt);
        perDay[day] = (perDay[day] || 0) + 1;
    });

    const data = latest.map((item, index) => {
        const day = dayLabel(item.createdAt);
        return {
            no: index + 1,
            label: perDay[day] > 1 ? `${day}, ${timeLabel(item.createdAt)}` : day,
            fullDate: formatDate(item.createdAt),
            signed: item.result,
            percent: Number((Math.abs(item.result) * 100).toFixed(2)),
        };
    });

    return (
        <>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />

                    <XAxis dataKey="no" tickFormatter={(n) => data[n - 1]?.label ?? ""} />


                    <YAxis
                        domain={[0, 100]}
                        ticks={[0, 25, 50, 75, 100]}
                        tickFormatter={(v) => `${v}%`}
                        width={55}
                    />

                    <Tooltip content={<ChartTooltip />} cursor={{ fill: "#F3F4F6" }} />

                    <Bar dataKey="percent" shape={ColoredBar} maxBarSize={56} />
                </BarChart>
            </ResponsiveContainer>

            <div className="flex justify-center gap-6 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm" style={{ background: DISEASE_COLOR }} />
                    Terdiagnosis
                </span>
                <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm" style={{ background: HEALTHY_COLOR }} />
                    Tidak terdiagnosis
                </span>
            </div>
        </>
    );
};

export default HistoryChart;
